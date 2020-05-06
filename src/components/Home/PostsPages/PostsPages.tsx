import React from 'react';
import classes from './PostsPages.module.css';
import { useDispatch } from 'react-redux';
import * as actionsTrips from '../../../store/actions/actionsTrips';
import * as actionsTickets from '../../../store/actions/actionsTickets';

interface PostsPages {
    page: any;
    url: string;
    historyPush: any;
    splicedArr: [][];
    postPerPage: number;
    lastPostDate?: {}[];
    lastPostDate1?: {}[];
    lastPostDate2?: {}[];
}

const PostsPages = (props: PostsPages) => {
    const dispatch = useDispatch();
    const on_NextPage_Trips_Handler = (lastPostDate: {}[]) =>
        dispatch(actionsTrips.onNextPageTripsHandler(lastPostDate));
    const on_NextPage_Tickets_Handler = (lastPostDate: {}[]) =>
        dispatch(actionsTickets.onNextPageTicketsHandler(lastPostDate));

    const pageNextClicked = (e: any) => {
        e.preventDefault();
        // NEXT PAGE FROM TRIPS
        if (props.url === `/trips/${props.page}`) {
            props.lastPostDate &&
                parseInt(props.page) === props.splicedArr.length - 2 &&
                on_NextPage_Trips_Handler(props.lastPostDate);
        }
        // NEXT PAGE FROM TICKETS
        if (props.url === `/tickets/${props.page}`) {
            props.lastPostDate &&
                parseInt(props.page) === props.splicedArr.length - 2 &&
                on_NextPage_Tickets_Handler(props.lastPostDate);
        }
        // NEXT PAGE FROM HOME
        if (props.url === `/home/${props.page}`) {
            if (props.lastPostDate1 && props.lastPostDate2 && parseInt(props.page) === props.splicedArr.length - 2) {
                on_NextPage_Tickets_Handler(props.lastPostDate1);
                on_NextPage_Trips_Handler(props.lastPostDate2);
            }
        }
        // history push
        const nextPage = props.page && parseInt(props.page) + 1;
        props.historyPush(`${nextPage}`);
    };

    const pageBackClicked = (e: any) => {
        e.preventDefault();
        const backPage = props.page >= 1 ? parseInt(props.page) - 1 : 0;
        props.historyPush(`${backPage}`);
    };
    let postPagesButtons: any;
    if (props.splicedArr.length === 0) {
        return (postPagesButtons = null);
    } else if (parseInt(props.page) === 0 && props.splicedArr.length > 1) {
        return (postPagesButtons = (
            <ul className={classes.PostsPagesUL}>
                <span className={classes.PostsPagesSpan}>...</span>
                <li className={classes.PostsPagesLI} onClick={pageNextClicked}>
                    &#62; sekantis
                </li>
            </ul>
        ));
    } else if (parseInt(props.page) === props.splicedArr.length - 1 && props.splicedArr.length - 1 > 0) {
        return (postPagesButtons = (
            <ul className={classes.PostsPagesUL}>
                <li className={classes.PostsPagesLI} onClick={pageBackClicked}>
                    atgal &#60;
                </li>
                <span className={classes.PostsPagesSpan}>...</span>
            </ul>
        ));
    } else if (parseInt(props.page) > 0 && parseInt(props.page) !== props.splicedArr.length - 1) {
        return (postPagesButtons = (
            <ul className={classes.PostsPagesUL}>
                <li className={classes.PostsPagesLI} onClick={pageBackClicked}>
                    atgal &#60;
                </li>
                <span className={classes.PostsPagesSpan}>...</span>
                <li className={classes.PostsPagesLI} onClick={pageNextClicked}>
                    &#62; sekantis
                </li>
            </ul>
        ));
    } else {
        postPagesButtons = null;
    }

    return postPagesButtons;
};

export default PostsPages;

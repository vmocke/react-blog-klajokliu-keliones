import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../..';
import * as actionsTickets from '../../store/actions/actionsTickets';
import classes from './TicketsPost.module.css';
import PageTopTwoLines from '../../components/PageTopTwoLines/PageTopTwoLines';
import HeaderSpacer from '../../components/Header/HeaderSpacer/HeaderSpacer';
import PostShowCard from '../../components/PostShowCard/PostShowCard';
import { redirecting } from '../../shared/utility';

const TicketsPost = () => {
    const { id } = useParams();
    const { push } = useHistory();
    const [show, setShow]: any[] = useState([]);

    const tickets = useSelector((state: AppState) => state.reducerTickets.tickets);
    const error = useSelector((state: AppState) => state.reducerTickets.error);

    const dispatch = useDispatch();
    const on_Ticekts_Post_Server_Search = useCallback(
        (urlId: string) => dispatch(actionsTickets.onTicektsPostServerSearch(urlId)),
        [dispatch],
    );
    const on_Tickets_Post_Get_Extra_Content = useCallback(
        (urlId: string) => dispatch(actionsTickets.onTicketsPostGetExtraContent(urlId)),
        [dispatch],
    );

    useEffect(() => {
        if (id) {
            const checkPostLocal = tickets.filter((item: any) => item.id === id);
            if (checkPostLocal.length !== 0) {
                // TICKETS SEARCH LOCAL
                const checkExtraContent = checkPostLocal[0].hasOwnProperty('extraContent');
                if (!checkExtraContent) {
                    on_Tickets_Post_Get_Extra_Content(id);
                } else {
                    setShow(checkPostLocal);
                }
            } else if (checkPostLocal.length === 0) {
                // TICKETS POST SEARCH SERVER
                on_Ticekts_Post_Server_Search(id);
            } else {
                console.error('Klaida...');
            }
        } else {
        }
    }, [on_Ticekts_Post_Server_Search, tickets, id, on_Tickets_Post_Get_Extra_Content]);

    let postToShow =
        show &&
        show.map((item: any) => (
            <PostShowCard
                key={item.id}
                mainImg={item.imgUrl}
                mainDate={item.date}
                mainTitle={item.title}
                mainText={item.text}
                extraContent={item.extraContent}
            />
        ));

    return (
        <div className={classes.TicketsPostPage}>
            <HeaderSpacer />
            <PageTopTwoLines />
            {postToShow}
            {error && redirecting(error, push, 5000)}
        </div>
    );
};

export default TicketsPost;

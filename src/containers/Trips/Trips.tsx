import React, { useEffect, useCallback } from 'react';
import classes from './Trips.module.css';
import HeaderSpacer from '../../components/Header/HeaderSpacer/HeaderSpacer';
import PageTopTwoLines from '../../components/PageTopTwoLines/PageTopTwoLines';
import TripsCard from '../../components/Trips/TripsCard/TripsCard';
import PostsPages from '../../components/Home/PostsPages/PostsPages';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../..';
import * as actionsTrips from '../../store/actions/actionsTrips';
import { redirecting } from '../../shared/utility';

const Trips = () => {
    const { url } = useRouteMatch();
    const { page } = useParams();
    const { push } = useHistory();

    const trips = useSelector((state: AppState) => state.reducerTrips.trips);
    const error = useSelector((state: AppState) => state.reducerTrips.error);

    const dispatch = useDispatch();
    const on_Get_Trips_Data = useCallback(() => dispatch(actionsTrips.onGetTripsData()), [dispatch]);

    useEffect(() => {
        trips.length === 0 && on_Get_Trips_Data();
        if (trips.length === 0 && page && parseInt(page) !== 0) {
            push(`/trips/0`);
        }
    }, [on_Get_Trips_Data, page, push, trips.length]);
    // POSTS PER PAGE
    const postsPerPage = 4;
    let tripsPageArr: any[] = [];
    let tripsArr = [...trips];
    while (tripsArr.length > 0) {
        const tempArr = tripsArr.splice(0, postsPerPage);
        tripsPageArr = [...tripsPageArr].concat([tempArr]);
    }
    // GETTING LAST POST DATE
    const lastPostDate: {}[] = [];
    if (trips.length > 0 && tripsPageArr.length > 0) {
        const lastPageArr = tripsPageArr[tripsPageArr.length - 1];
        const lastPagePostDate = lastPageArr[lastPageArr.length - 1].date;
        lastPostDate.push(lastPagePostDate);
    } else if (trips.length > 0 && tripsPageArr.length === 0) {
        const lastPagePostDate = tripsPageArr[tripsPageArr.length - 1].date;
        lastPostDate.push(lastPagePostDate);
    }

    const onTripsCardClickedHandler = (e: any, id_: string) => {
        e.preventDefault();
        //const linkId = id_.replace(/ /g, '-');
        push(`${url}/${id_}`);
    };

    let tripsPosts =
        trips.length !== 0 && page
            ? tripsPageArr[parseInt(page)].map((item: any) => {
                  return (
                      <TripsCard
                          key={item.id}
                          title={item.title}
                          src={item.imgUrl}
                          onClick={(e: any) => onTripsCardClickedHandler(e, item.id)}
                      />
                  );
              })
            : null;

    return (
        <div className={classes.Trips}>
            <HeaderSpacer />
            <PageTopTwoLines />
            <div className={classes.TripsAllCards}>{tripsPosts}</div>
            {error && redirecting(error, push, 5000)}
            <PostsPages
                page={page}
                url={url}
                historyPush={push}
                splicedArr={tripsPageArr}
                postPerPage={postsPerPage}
                lastPostDate={lastPostDate}
            />
        </div>
    );
};

export default Trips;

import React, { useState, useCallback, useEffect } from 'react';
import classes from './Trips.module.css';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actionsTrips from '../../store/actions/actionsTrips';
import { AppState } from '../..';
import PostShowCard from '../../components/PostShowCard/PostShowCard';
import HeaderSpacer from '../../components/Header/HeaderSpacer/HeaderSpacer';
import PageTopTwoLines from '../../components/PageTopTwoLines/PageTopTwoLines';

const TripsPost = () => {
    const { id } = useParams();
    const { push } = useHistory();
    const [show, setShow]: any[] = useState([]);

    const trips = useSelector((state: AppState) => state.reducerTrips.trips);
    const error = useSelector((state: AppState) => state.reducerTrips.error);

    const dispatch = useDispatch();
    const on_Ticekts_Post_Server_Search = useCallback(
        (urlId: string) => dispatch(actionsTrips.onTripsPostServerSearch(urlId)),
        [dispatch],
    );
    const on_Trips_Post_Get_Extra_Content = useCallback(
        (urlId: string) => dispatch(actionsTrips.onTripsPostGetExtraContent(urlId)),
        [dispatch],
    );

    useEffect(() => {
        if (id) {
            const checkPostLocal = trips.filter((item: any) => item.id === id);
            if (checkPostLocal.length !== 0) {
                // TRIPS SEARCH LOCAL
                const checkExtraContent = checkPostLocal[0].hasOwnProperty('extraContent');
                if (!checkExtraContent) {
                    on_Trips_Post_Get_Extra_Content(id);
                } else {
                    setShow(checkPostLocal);
                }
            } else if (checkPostLocal.length === 0) {
                // TRIPS POST SEARCH SERVER
                on_Ticekts_Post_Server_Search(id);
            } else {
                console.error('Klaida...');
            }
        }
    }, [on_Ticekts_Post_Server_Search, trips, id, on_Trips_Post_Get_Extra_Content]);

    const postToShow =
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

    const redirecting = (
        <React.Fragment>
            <h1>{error.message}</h1>
            {setTimeout(() => {
                if (error) {
                    push('/home/0');
                }
            }, 5000)}
        </React.Fragment>
    );

    return (
        <div className={classes.TripsPostPage}>
            <HeaderSpacer />
            <PageTopTwoLines />
            {postToShow}
            {error && redirecting}
        </div>
    );
};

export default TripsPost;

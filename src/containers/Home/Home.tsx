import React, { useEffect, useCallback } from 'react';
import classes from './Home.module.css';
import Hero from '../../components/Hero/Hero';
import PostsCard from '../../components/Home/PostsCard/PostsCard';
import PostsPages from '../../components/Home/PostsPages/PostsPages';
import * as actionsHome from '../../store/actions/actionsHome';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../..';
import { convertDateFirestore, getLastPostDate } from '../../shared/utility';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';

const Home = () => {
    const { url } = useRouteMatch();
    const { page } = useParams();
    const { push } = useHistory();

    const trips = useSelector((state: AppState) => state.reducerTrips.trips);
    const tickets = useSelector((state: AppState) => state.reducerTickets.tickets);

    const dispatch = useDispatch();
    const on_Home_Page_Reload_Tickets_Handler = useCallback(
        () => dispatch(actionsHome.onHomePageReloadTicketsHandler()),
        [dispatch],
    );
    const on_Home_Page_Reload_Trips_Handler = useCallback(() => dispatch(actionsHome.onHomePageReloadTripsHandler()), [
        dispatch,
    ]);

    useEffect(() => {
        if (trips.length === 0 && tickets.length === 0) {
            on_Home_Page_Reload_Tickets_Handler();
            on_Home_Page_Reload_Trips_Handler();
        }
        if (trips.length === 0 && tickets.length === 0 && page && parseInt(page) !== 0) {
            push(`home/0`);
        }
    }, [
        on_Home_Page_Reload_Tickets_Handler,
        on_Home_Page_Reload_Trips_Handler,
        trips.length,
        tickets.length,
        page,
        push,
    ]);
    // SORTING BY DATE DESC
    const tripsAndTicketsArr = [...trips, ...tickets];
    const sortedArrByDate = tripsAndTicketsArr.sort((a: any, b: any) => a.date - b.date).reverse();
    // POSTS PER PAGE
    const postsPerPage = 7;
    let homePageArr: any[] = [];
    let homeArr = [...sortedArrByDate];
    while (homeArr.length > 0) {
        const tempArr = homeArr.splice(0, postsPerPage);
        homePageArr = [...homePageArr].concat([tempArr]);
    }
    // GETTING LAST POST DATE
    const lastDateTrips: any = trips && getLastPostDate(trips);
    const lastDateTickets: any = tickets && getLastPostDate(tickets);

    const onPostsCardClickedHandler = (e: any, id: string) => {
        e.preventDefault();
        const checkTripsArr: {}[] = trips.filter((item: any) => item.id === id);
        const checkTicketsArr: {}[] = tickets.filter((item: any) => item.id === id);
        if (checkTripsArr.length !== 0) {
            push(`/trips/0/${id}`);
        }
        if (checkTicketsArr.length !== 0) {
            push(`/tickets/0/${id}`);
        }
    };

    const postCards =
        url === `/home/${page}` && homePageArr.length !== 0 && page
            ? homePageArr[parseInt(page)].map((item: any) => {
                  return (
                      <PostsCard
                          key={item.id}
                          title={item.title}
                          date={convertDateFirestore(item.date)}
                          text={item.text}
                          src={item.imgUrl}
                          onClick={(e: any) => onPostsCardClickedHandler(e, item.id)}
                      />
                  );
              })
            : null;

    return (
        <div className={classes.Home}>
            <Hero />
            {postCards}
            <PostsPages
                splicedArr={homePageArr}
                postPerPage={postsPerPage}
                page={page}
                historyPush={push}
                url={url}
                lastPostDate1={lastDateTickets}
                lastPostDate2={lastDateTrips}
            />
        </div>
    );
};

export default Home;

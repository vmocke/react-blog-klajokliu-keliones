import React, { useCallback, useEffect } from 'react';
import classes from './Tickets.module.css';
import HeaderSpacer from '../../components/Header/HeaderSpacer/HeaderSpacer';
import TicketsCard from '../../components/Tickets/TicketsCard/TicketsCard';
import PageTopTwoLines from '../../components/PageTopTwoLines/PageTopTwoLines';
import * as actionsTickets from '../../store/actions/actionsTickets';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../..';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';
import PostsPages from '../../components/Home/PostsPages/PostsPages';
import { redirecting, getLastPageLastPostDate } from '../../shared/utility';

const Tickets = () => {
    const { url } = useRouteMatch();
    const { push } = useHistory();
    const { page } = useParams();

    const tickets = useSelector((state: AppState) => state.reducerTickets.tickets);
    const ticketsBackground = useSelector((state: AppState) => state.reducerTickets.ticketsBackground);
    const error = useSelector((state: AppState) => state.reducerTickets.error);

    const dispatch = useDispatch();
    const on_Get_Tickets_Data = useCallback(() => dispatch(actionsTickets.onGetTicketsData()), [dispatch]);

    useEffect(() => {
        tickets.length === 0 && on_Get_Tickets_Data();
        if (tickets.length === 0 && page && parseInt(page) !== 0) {
            push(`/tickets/0`);
        }
    }, [on_Get_Tickets_Data, page, push, tickets.length]);
    // POSTS PER PAGE
    const postsPerPage = 4;
    let ticketsPageArr: any[] = [];
    let ticketsArr = [...tickets];
    while (ticketsArr.length > 0) {
        const tempArr = ticketsArr.splice(0, postsPerPage);
        ticketsPageArr = [...ticketsPageArr].concat([tempArr]);
    }
    // GETTING LAST PAGE LAST POST DATE
    const lastPostDate: any = tickets && getLastPageLastPostDate(tickets, ticketsPageArr);

    const onTicketsCardClickedHandler = (e: any, id_: string) => {
        e.preventDefault();
        //const linkId = id_.replace(/ /g, '-');
        push(`${url}/${id_}`);
    };

    let ticketsCard =
        tickets.length !== 0 && page
            ? ticketsPageArr[parseInt(page)].map((item: any) => {
                  return (
                      <TicketsCard
                          key={item.id}
                          title={item.title}
                          src={item.imgUrl}
                          srcBackground={ticketsBackground}
                          onClick={(e: any) => onTicketsCardClickedHandler(e, item.id)}
                      />
                  );
              })
            : null;

    return (
        <div className={classes.Tickets}>
            <HeaderSpacer />
            <PageTopTwoLines />
            <div className={classes.TicketsAllCards}>{ticketsCard}</div>
            {error && redirecting(error, push, 5000)}
            <PostsPages
                page={page}
                url={url}
                historyPush={push}
                postPerPage={postsPerPage}
                splicedArr={ticketsPageArr}
                lastPostDate={lastPostDate}
            />
        </div>
    );
};

export default Tickets;

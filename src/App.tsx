import React, { Suspense } from 'react';
import classes from './App.module.css';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

const Home = React.lazy(() => import('./containers/Home/Home'));
const Trips = React.lazy(() => import('./containers/Trips/Trips'));
const TripsPost = React.lazy(() => import('./containers/TripsPost/TripsPost'));
const Tickets = React.lazy(() => import('./containers/Tickets/Tickets'));
const TicketsPost = React.lazy(() => import('./containers/TicketsPost/TicketsPost'));
const Shop = React.lazy(() => import('./containers/Shop/Shop'));
const Contact = React.lazy(() => import('./containers/Contact/Contact'));

const App = () => {
    let routes = (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home/0" />
                </Route>
                <Route path="/home/:page" exact component={(props: any) => <Home {...props} />} />
                <Route path="/trips/:page" exact component={(props: any) => <Trips {...props} />} />
                <Route path="/trips/:page/:id" exact component={(props: any) => <TripsPost {...props} />} />
                <Route path="/tickets/:page" exact component={(props: any) => <Tickets {...props} />} />
                <Route path="/tickets/:page/:id" exact component={(props: any) => <TicketsPost {...props} />} />
                <Route path="/shop" exact component={(props: any) => <Shop {...props} />} />
                <Route path="/contact" exact component={(props: any) => <Contact {...props} />} />
                <Route path="/" render={() => <h1>Atsiprašome, tokio puslapio nėra</h1>} />
            </Switch>
        </React.Fragment>
    );

    return (
        <div className={classes.App}>
            <Layout>
                <main>
                    <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
                </main>
            </Layout>
        </div>
    );
};

export default withRouter(App);

import React, { useMemo } from 'react';
import { Box, Card, CircularProgress, Grid } from '@material-ui/core';

import Layout from '../layaut';

import { useTakeFewListQuery } from '../generated/graphql';
import CountList from '../components/card-list';

const HomePage: React.FC = () => {
    const { data, loading } = useTakeFewListQuery({
        variables: {
            takeFewListNumber: 3
        },
        fetchPolicy: "network-only"
    });
    const lists = useMemo(() => data?.takeFewList || [], [data]);
    return (
        <Layout>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box p={2}>
                            <h1>Learn Words</h1>
                            <p>You can learn word</p>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
            <Box mb={2}></Box>
            {loading && <Box display="flex" justifyContent="center" alignContent="center" p={4}>
                <CircularProgress />
            </Box>}
            {!loading && (
                <Grid container spacing={2}>
                    {lists.map((it: any) => (
                        <Grid item xs={4}>
                            <CountList id={it._id} title={it.listTitle} count={it.words.length} />
                        </Grid>)
                    )}
                </Grid>)
            }
        </Layout>
    );
};

export default HomePage;
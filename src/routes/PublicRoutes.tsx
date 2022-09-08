// eslint-disable-next-line react/no-unstable-nested-components

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { School } from '../pages/School';

function PublicRoute() {
  // const { component: Component, ...rest } = props;

  return (
    <Routes
    >
      <Route element={<Home />}  path="/" />
      <Route element={<School />}  path="/school/:id" />

    </Routes>
  );
}

export default PublicRoute;
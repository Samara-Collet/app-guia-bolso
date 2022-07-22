import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import AccountsAndCards from '../components/AccountsAndCards';
import ForYou from '../components/ForYou';
import MonthlyPlanning from '../components/MonthlyPlanning';
import axios from 'axios';
import Nav from '../components/Nav';
import Loan from '../components/Loan';

export default () => {
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    getData().then(res => setResponseData(res));
  });

  const getData = async () => {
    try {
      let result;
      result = await axios(
        'http://ms-dojo-mobile-pj.ms.qa/api/v1/home/guiabolso',
        {
          method: 'get',
          headers: {
            'Content-type': 'Application/json',
            Accept: 'Application/json',
          },
        },
      );
      return result.data;
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <Nav />
      <ScrollView>
        <AccountsAndCards />
        <ForYou data={responseData} />
        <MonthlyPlanning data={responseData} />
        <Loan data={responseData} />
      </ScrollView>
    </>
  );
};

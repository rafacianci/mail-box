import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Table from './Table';
import Thead from './Thead';
import Tbody from './Tbody';
import Tr from './Tr';
import Td from './Td';
import Th from './Th';

storiesOf('Table', module)
  .add('Table', () => (
    <Table>
      <Thead>
        <Th>Test 1</Th>
        <Th>Test 2</Th>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Test 1</Td>
          <Td>Test 2</Td>
        </Tr>
      </Tbody>
    </Table>
  ));

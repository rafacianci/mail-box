import React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from '../../components/Table';
import { FormatDate } from '../../utils';

const EmailList = ({ messages }) => (
  <Table>
    <Thead>
      <Th>Sender</Th>
      <Th>Subject</Th>
      <Th>Time</Th>
    </Thead>
    <Tbody>
      {
        messages.map((message) => (
          <Tr key={message.uid}>
            <Td>{message.sender}</Td>
            <Td>{message.subject}</Td>
            <Td>{FormatDate(message.time_sent)}</Td>
          </Tr>
        ))
      }
    </Tbody>
  </Table>
);

const mapStateProps = ({ email }) => ({
  messages: email.messages,
});

export default connect(mapStateProps)(EmailList);

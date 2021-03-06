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
import { viewMessage } from '../../actions/email';

const EmailList = ({ messages, onSelectMessage }) => (
  <Table>
    <Thead>
      <Th>Sender</Th>
      <Th>Subject</Th>
      <Th>Time</Th>
    </Thead>
    <Tbody>
      {
        messages.map((message) => (
          <Tr
            key={message.uid}
            onClick={() => onSelectMessage(message.uid)}
            highlight={message.readed}
          >
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

export default connect(mapStateProps, {
  onSelectMessage: viewMessage,
})(EmailList);

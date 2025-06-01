import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'; 

const TransactionHistory = ({ items }) => {
  
  const typeTranslations = {
    invoice: 'Fatura',
    payment: 'Ödeme',
    withdrawal: 'Para Çekme',
    deposit: 'Para Yatırma'
  };

  return (
    <table className={styles.transactionTable}>
      <thead>
        <tr>
          <th>İşlem Türü</th>
          <th>Tutar</th>
          <th>Para Birimi</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td>{typeTranslations[transaction.type] || transaction.type}</td>
            <td>{parseFloat(transaction.amount).toFixed(2)}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TransactionHistory;
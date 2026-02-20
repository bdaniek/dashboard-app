import { useState, useCallback } from 'react';
import {
  Wrapper,
  Title,
  ScrollContainer,
  TransactionItem,
  Left,
  Right,
  Username,
  Amount,
  Status,
  Label,
  StateWrapper,
} from './Transactions.styles.ts';
import type { Transaction } from '@/types/types.ts';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import CircularProgress from '@mui/material/CircularProgress';

const BATCH_SIZE = 8;

interface TransactionsProps {
  transactions: Transaction[];
}

export const Transactions = ({ transactions }: TransactionsProps) => {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const loadMore = useCallback(() => {
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, transactions.length));
    }, 1000);
  }, [transactions.length]);

  const [sentryRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: visibleCount < transactions.length,
    onLoadMore: loadMore,
    disabled: false,
    rootMargin: '0px 0px 200px 0px',
  });

  const visibleTransactions = transactions.slice(0, visibleCount);

  return (
    <Wrapper>
      <Title>Recent Transactions</Title>

      <ScrollContainer>
        {visibleTransactions.map(({ id, user, createdAt, paymentMethod, status, amount }) => (
          <TransactionItem key={id}>
            <Left>
              <Username>{user}</Username>
              <Label>
                {paymentMethod.toUpperCase()} • {new Date(createdAt).toLocaleDateString()}{' '}
                {new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Label>
            </Left>

            <Right>
              <Amount>${amount.toLocaleString()}</Amount>
              <Status status={status}>{status}</Status>
            </Right>
          </TransactionItem>
        ))}

        {visibleCount < transactions.length && (
          <StateWrapper ref={sentryRef}>
            <CircularProgress size={24} />
          </StateWrapper>
        )}

        {visibleCount >= transactions.length && (
          <StateWrapper>— End of transactions —</StateWrapper>
        )}
      </ScrollContainer>
    </Wrapper>
  );
};

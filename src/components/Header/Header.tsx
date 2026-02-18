import {
  DateText,
  LogoutButton,
  Wrapper,
  TimeContainer,
} from '@/components/Header/Header.styles.ts';
import { useCurrentDate } from '@/hooks/useCurrentDate.ts';
import { useAuth } from '@/context/AuthContext.tsx';

const Header = () => {
  const { logout } = useAuth();
  const date = useCurrentDate();

  return (
    <Wrapper>
      <DateText>
        <TimeContainer>{date.toLocaleTimeString()}</TimeContainer>
        <span>{date.toLocaleDateString()}</span>
      </DateText>
      <LogoutButton variant="contained" onClick={logout}>
        Logout
      </LogoutButton>
    </Wrapper>
  );
};

export default Header;

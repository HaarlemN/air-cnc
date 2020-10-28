import styled from 'styled-components';

export const SpotList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SpotListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  background-size: cover;
  border-radius: 4px;
`;

export const Paragraph = styled.p``;

export const StrongText = styled.strong`
  margin-top: 10px;
  font-size: 2.2rem;
  color: #444;
`;

export const Span = styled.span`
  font-size: 1.4rem;
  color: #999;
`;

export const NotificationsList = styled.ul`
  list-style: none;
  margin-bottom: 15px;
`;

export const NotificationsListItem = styled.li`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const NotificationsButton = styled.button`
  margin-right: 10px;
  border: 0;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  &.accept {
    color: #84c870;
    font-size: 1.4rem;
    transition: opacity 0.3s;
  }

  &.accept:hover {
    opacity: 0.8;
  }

  &.reject {
    color: #e55e5e;
    font-size: 1.4rem;
    transition: opacity 0.3s;
  }

  &.reject:hover {
    opacity: 0.8;
  }
`;

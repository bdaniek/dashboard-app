import { Wrapper, Track, Item } from './Carousel.styles.ts';

const Carousel = () => (
  <Wrapper>
    <Track>
      {Array.from({ length: 20 }, (_, i) => (
        <Item key={i}>🎉 Welcome To dashboard-app 1.0 🎉</Item>
      ))}
    </Track>
  </Wrapper>
);

export default Carousel;

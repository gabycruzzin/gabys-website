import { Parallax } from 'react-parallax';

const Container = () => (
    <Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);

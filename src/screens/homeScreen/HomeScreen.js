import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Video from '../../components/video/Video'
import categoriesBar from '../../components/categoriesBar/CategoriesBar'


const HomeScreen = () => {
    return (
        <Container>
            <categoriesBar />

            <Row>
                {[...new Array(20)].map(() => (
                    <col Lg={3} md={4}>
                        <Video />
                    </col>
                ))}
            </Row>

        </Container>
    )
}

export default HomeScreen

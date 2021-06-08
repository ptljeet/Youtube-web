import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Video from '../../components/video/Video'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import { useDispatch } from 'react-redux';
import { getPopularVideos } from '../../redux/actions/videos.action';


const HomeScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())

    }, [dispatch])


    return (
        <Container>
            <CategoriesBar />
            <Row>
                {
                    [...new Array(20)].map(() => (
                        <Col lg={3} md={4}>
                            <Video />
                        </Col>))
                }
            </Row>
        </Container>
    )
}

export default HomeScreen

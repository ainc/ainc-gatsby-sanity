import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/UI/Title/Title'

const MentorsPage = () => {

    return (
        <Layout>
            <main>
                <Row>
                    <Title className='text-center'>Mentors</Title>
                </Row>
            </main>
        </Layout>
    )
}

export default MentorsPage;
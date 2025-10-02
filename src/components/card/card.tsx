import { Row, Col, Card } from 'antd'
import './card.scss'

export const CustomCard = () => {

    const cardData = Array.from({ length: 12 }, (_, i) => ({
  title: `Card ${i + 1}`,
  description: `This is card number ${i + 1}`
}));

    return  <Row gutter={[16, 16]}>
      {cardData.map((card, index) => (
        <Col 
          key={index} 
          xs={24} sm={12} md={8} lg={8} xl={8} 
        >
          <Card className='custom-card' bordered>
            <div className='card-header'>
                <div className='container'>
                    <span className='key'>key:</span> 
                    <span className='value'>value</span>
                </div>
            </div>
            <div className='card-body'>
                <img className='avatar' alt='user-avatar-image' src=''></img>
                <div>
                    <div>
                        <span className='name'>John Does</span> 
                        <span className='slash'>/</span>
                        <span className='gist-name'>Gists</span>
                    </div>
                    <div className='created-at'>Notebook Name</div>
                    <div className='description'>Description</div>
                </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
}
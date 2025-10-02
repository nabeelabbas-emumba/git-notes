import { Row, Col, Card } from 'antd'
import './card.scss'

export const CustomCard = () => {

    return  <Card className='custom-card' bordered>
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
}
import React from 'react'
import PropTypes from 'prop-types'

import HistoryTeaser from '../HistoryTeaser/HistoryTeaser'
import Container from '../ui/Container/Container'

import './History.scss'

const History = ({ data }) => (
    data && 
    <Container>
        <div className="History">
            <h3>Unsere Geschichte</h3>
            <p>Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum.</p>
            <div className="History__teasers">
                {data.length > 0 && data.map((item, index) => 
                    <HistoryTeaser data={item} key={index}/>
                )}
            </div>
        </div>
    </Container>
)

History.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            historyimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            title: PropTypes.string,
            description: PropTypes.string,
        })
    ).isRequired,
    getAsset: PropTypes.func,
}

export default History

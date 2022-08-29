import React from 'react'
import { observer } from 'mobx-react-lite';
import TypeBar from '../components/TypeBar';
import {Col} from "react-bootstrap"


const CatalogProduct = observer(() => {
  const {product} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes())
  }, [])

    return (
      <section className='list-product'>
        <div className="wrapper">
          <Col ml={3}>
            <TypeBar></TypeBar>
          </Col>
        </div>
      </section>
    )
  }
  ) 

export default CatalogProduct
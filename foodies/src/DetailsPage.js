import React, { Component } from 'react';
import './static/detailsPage.css';
import './static/landingPage.css';
import Dygraph from 'dygraphs';


class DygraphProdcutSingle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="dygraphProdcutSingle"></div>
        )
    }

    componentDidMount() {
        const g= new Dygraph('dygraphProdcutSingle', 
        "Date,Temperature\n" +
        "2008-05-07,75\n" +
        "2008-05-08,70\n" +
        "2008-05-09,80\n"
        )
    }
}


function ProductInfoSingle({product}) {
    return(
        <div>
            <button className="dtview-backBtn"><i className="fa fa-chevron-left"></i></button>
            <h1 className="dtview-prodTitle"><center>{product.title}</center></h1>
            <center><img className="dtview-prodPic" src={product.picUrl} width="200" height="150"></img></center>
        </div>
    )
}

function DetailsView(){
    const testProduct = {
        title: "Frosta Hähnchen Curry",
        picUrl: "https://www.frosta.de/wp-content/uploads/sites/2/2020/06/csm_Haehnchen-Curry-500g_67df23452c.webp"
    };
    return(
        <div className="dtview-container">
            <ProductInfoSingle product={testProduct}/>
            <div className="flexBreak"></div>
            <h1>Preisentwicklung</h1>
            <div className="flexBreak"></div>
            <DygraphProdcutSingle/>
        </div>
    )
}

export default DetailsView;

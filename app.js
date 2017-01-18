const ProductList = React.createClass({

  
  render: function() {

    const products = Data.map((product) => {

      return (
        <Product 
          id={product.id}
          description={product.description} 
          title={product.title}
          votes={product.votes} 
          submitter_avatar_url={product.submitter_avatar_url} 
          product_image_url={product.product_image_url}  
          key={"product-" + product.id}
        />
      ); 
    });

    return (
      <div className="ui items">
        {products}
      </div>
    )
  }
});



const Product = React.createClass({
  render: function() {
    return (
      <div className="item">

        <div className="image">
          <img src={this.props.product_image_url} />
        </div>

        <div className="middle aligned content">
          <div className="description">
            <a> {this.props.title} </a>
            <p> {this.props.description} </p>
          </div>
        </div>

        <div className="extra">
          <span> Submitted by: </span> 
          <img className="ui avatar image" src={this.props.submitter_avatar_url} />
        </div>

      </div>
    )
  }  
});

Product.propTypes = {
  id: React.PropTypes.number,
  title: React.PropTypes.string.isRequired
};

ReactDOM.render(<ProductList/>, document.getElementById('content'));
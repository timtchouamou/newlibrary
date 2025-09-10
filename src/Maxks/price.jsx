<div className="book__price">

        {identify.salePrice ?

        (<><span className="book__price--normal">${identify.originalPrice.toFixed(2)}</span>${identify.salePrice.toFixed(2)}</>)
        :
        (<>${identify.originalPrice.toFixed(2)}</>)

      }
       
      </div>
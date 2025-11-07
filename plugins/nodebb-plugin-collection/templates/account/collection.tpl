<!-- IMPORT partials/account/header.tpl -->

<div class="account">
  <div class="row">
    <div class="col-12">
      <h2>Collection NFT</h2>
      
      {{{ if !items.length }}}
      <div class="alert alert-info">
        Aucun NFT dans cette collection
      </div>
      {{{ end }}}
      
      <div class="row">
        {{{ each items }}}
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="{items.image}" class="card-img-top" alt="{items.title}">
            <div class="card-body">
              <h5 class="card-title">{items.title}</h5>
              <p class="card-text">{items.description}</p>
            </div>
          </div>
        </div>
        {{{ end }}}
      </div>
      
    </div>
  </div>
</div>
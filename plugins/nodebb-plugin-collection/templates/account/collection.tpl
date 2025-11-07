<!-- IMPORT partials/account/header.tpl -->

<div class="account">
  <div class="row">
    <div class="col-12">
      <h2>Collection</h2>
      
      <div class="row">
        {{{ each items }}}
        <div class="col-md-4 mb-4">
          <a href="{./url}" class="text-decoration-none">
            <div class="card h-100" style="cursor: pointer;">
              <img src="{./image}" class="card-img-top" alt="{./title}">
              <div class="card-body">
                <h5 class="card-title text-dark">{./title}</h5>
                <p class="card-text text-muted">{./description}</p>
              </div>
            </div>
          </a>
        </div>
        {{{ end }}}
      </div>
      
    </div>
  </div>
</div>
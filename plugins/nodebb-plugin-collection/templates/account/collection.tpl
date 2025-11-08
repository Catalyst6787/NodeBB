<!-- IMPORT partials/account/header.tpl -->

<div class="d-flex justify-content-between align-items-center mb-3">
  <h4 class="fw-bold mb-0">Collection</h4>
  
  {{{ if isOwner }}}
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="collectionVisibility" {{{ if isPublic }}}checked{{{ end }}}>
    <label class="form-check-label" for="collectionVisibility">
      Public
    </label>
  </div>
  {{{ end }}}
</div>

<div class="row g-3">
  {{{ each items }}}
  <div class="col-12 col-sm-6 col-lg-4">
    <a href="{./url}" class="text-decoration-none">
      <div class="card h-100 border-0 shadow-sm" style="cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 0.5rem 1rem rgba(0,0,0,0.15)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 0.125rem 0.25rem rgba(0,0,0,0.075)';">
        <div style="overflow: hidden; border-radius: 0.375rem 0.375rem 0 0;">
          <img src="{./image}" class="card-img-top" alt="{./title}" style="object-fit: cover; height: 250px; width: 100%;">
        </div>
        <div class="card-body p-3">
          <h6 class="card-title text-dark fw-semibold mb-2">{./title}</h6>
          <p class="card-text text-muted small mb-0">{./description}</p>
        </div>
      </div>
    </a>
  </div>
  {{{ end }}}
</div>

</div>
</div>
</div>
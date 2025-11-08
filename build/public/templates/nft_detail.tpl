<div class="container py-4">
<div class="row justify-content-center">
<div class="col-12 col-xl-10">
<div class="d-flex flex-column align-items-center text-center mb-4">
<h2 class="fw-semibold mb-2">{nft.title}</h2>
{{{ if nft.reference }}}
<span class="badge text-bg-light border">{nft.reference}</span>
{{{ end }}}
</div>
<div class="row g-4 align-items-start">
<div class="col-12 col-md-6">
<div class="card border-0 shadow-sm">
<img src="{nft.image}" alt="{nft.title}" class="card-img-top rounded-top">
</div>
</div>
<div class="col-12 col-md-6">
<div class="card border-0 shadow-sm h-100">
<div class="card-body">
<h5 class="mb-3">Caractéristiques</h5>
{{{ if nft.attributes.length }}}
<div class="row row-cols-1 g-2">
{{{ each nft.attributes }}}
<div class="col">
<div class="d-flex justify-content-between align-items-center rounded px-3 py-2 bg-light">
<span class="text-muted">{./label}</span>
<span class="fw-semibold">{./value}</span>
</div>
</div>
{{{ end }}}
</div>
{{{ end }}}
{{{ if nft.serialNumber }}}
<div class="mt-3">
<div class="text-muted">N° de série</div>
<div class="fw-semibold">{nft.serialNumber}</div>
</div>
{{{ end }}}
</div>
</div>
</div>
</div>
{{{ if nft.description }}}
<div class="card border-0 shadow-sm mt-4">
<div class="card-body">
<h5 class="mb-3">Description</h5>
<div class="text-muted">{nft.description}</div>
</div>
</div>
{{{ end }}}
</div>
</div>
</div>
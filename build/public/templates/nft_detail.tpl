<div class="container mt-5">
<div class="row justify-content-center">
<div class="col-md-10 col-lg-8">
<div class="text-center mb-4">
<h1 class="mb-3">{nft.title}</h1>
{{{ if nft.reference }}}
<p class="text-muted">Ref: {nft.reference}</p>
{{{ end }}}
</div>
<div class="row">
<!-- Image -->
<div class="col-md-6 mb-4">
<img src="{nft.image}"
alt="{nft.title}"
class="img-fluid rounded shadow"
style="max-width: 100%; height: auto;">
</div>
<!-- Détails -->
<div class="col-md-6">
<h3 class="mb-3">Caractéristiques</h3>
{{{ if nft.attributes.length }}}
<div class="list-group">
{{{ each nft.attributes }}}
<div class="list-group-item d-flex justify-content-between">
<strong>{./label}:</strong>
<span>{./value}</span>
</div>
{{{ end }}}
</div>
{{{ end }}}
{{{ if nft.serialNumber }}}
<div class="mt-4">
<p class="text-muted">
<small>Serial Number: {nft.serialNumber}</small>
</p>
</div>
{{{ end }}}
</div>
</div>
{{{ if nft.description }}}
<div class="row mt-4">
<div class="col-12">
<h3>Description</h3>
<div class="text-muted">
{nft.description}
</div>
</div>
</div>
{{{ end }}}
</div>
</div>
</div>
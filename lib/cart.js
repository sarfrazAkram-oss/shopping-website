const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function parsePrice(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value !== "string") {
    return 0;
  }
  const numeric = value.replace(/[^0-9.]/g, "");
  const parsed = parseFloat(numeric);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed;
}

export function formatPrice(value) {
  return currencyFormatter.format(value || 0);
}

function toSlug(value) {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function buildCartItem(product, { fallbackImage, source }) {
  if (!product || !product.name) {
    throw new Error("Product requires at least a name");
  }

  const idBase = product.id || `${source ? `${source}-` : ""}${product.name}`;
  const id = toSlug(idBase);

  return {
    id,
    name: product.name,
    price: parsePrice(product.price),
    image: product.image || fallbackImage || null,
    quantity: product.quantity && product.quantity > 0 ? product.quantity : 1,
  };
}

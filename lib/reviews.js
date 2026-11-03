import data from "./reviews.json";

// Avaliações públicas do Google Maps (copiadas em data.collectedAt).
// Os nomes dos autores ficam de fora de propósito (LGPD): só texto e nota.
// Para atualizar, edite lib/reviews.json e ajuste "rating" e "total".
export const googleReviews = {
  rating: data.rating,
  total: data.total,
  collectedAt: data.collectedAt,
  url: "https://share.google/N3uzZSI3qvRASvzH1",
  items: data.reviews.filter((review) => review.text),
};

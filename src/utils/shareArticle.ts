import { Article } from "@/types/article";

export const shareArticle = (article: Article) => {
  if (navigator.share) {
    navigator
      .share({
        title: article.title,
        text: article.description,
        url: window.location.href,
      })
      .catch((error) => console.error("Error sharing:", error));
  } else {
    alert("El navegador no soporta la funcionalidad de compartir.");
  }
};

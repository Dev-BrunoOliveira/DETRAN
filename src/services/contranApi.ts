import {
  CONTRAN_ARTICLES_DATABASE,
  CONTRAN_TOPIC_SUMMARIES,
  CONTRAN_RESOLUTIONS_METADATA,
  ContranArticle,
  ContranTopicSummary
} from '../data/contranApiData';

export class ContranApiService {
  /**
   * Returns metadata about CONTRAN resolutions in the system.
   */
  static getMetadata() {
    return CONTRAN_RESOLUTIONS_METADATA;
  }

  /**
   * Retrieves all registered CONTRAN resolution articles.
   */
  static getAllArticles(): ContranArticle[] {
    return CONTRAN_ARTICLES_DATABASE;
  }

  /**
   * Retrieves a specific article by its ID.
   */
  static getArticleById(id: string): ContranArticle | undefined {
    return CONTRAN_ARTICLES_DATABASE.find(art => art.id === id);
  }

  /**
   * Searches articles by query string across article number, title, chapter, content, and key takeaways.
   */
  static searchArticles(query: string): ContranArticle[] {
    if (!query || query.trim() === '') {
      return CONTRAN_ARTICLES_DATABASE;
    }
    const cleanQuery = query.toLowerCase().trim();
    return CONTRAN_ARTICLES_DATABASE.filter(art => {
      return (
        art.articleNumber.toLowerCase().includes(cleanQuery) ||
        art.title.toLowerCase().includes(cleanQuery) ||
        art.chapterTitle.toLowerCase().includes(cleanQuery) ||
        art.content.toLowerCase().includes(cleanQuery) ||
        art.keyTakeaways.some(k => k.toLowerCase().includes(cleanQuery)) ||
        art.examTip.toLowerCase().includes(cleanQuery)
      );
    });
  }

  /**
   * Filters articles by resolution number (e.g., '1.020/2025', '911/2022').
   */
  static getArticlesByResolution(resolutionNum: string): ContranArticle[] {
    return CONTRAN_ARTICLES_DATABASE.filter(art =>
      art.resolution.toLowerCase().includes(resolutionNum.toLowerCase())
    );
  }

  /**
   * Gets all topic summaries for fast reference.
   */
  static getAllTopicSummaries(): ContranTopicSummary[] {
    return CONTRAN_TOPIC_SUMMARIES;
  }

  /**
   * Gets a specific topic summary by ID.
   */
  static getTopicSummaryById(id: string): ContranTopicSummary | undefined {
    return CONTRAN_TOPIC_SUMMARIES.find(t => t.id === id);
  }
}

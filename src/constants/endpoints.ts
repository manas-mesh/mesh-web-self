const serverUrl = `${process.env.NEXT_PUBLIC_REACT_APP_HTTPS === 'true' ? 'https' : 'http'}://${
  process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL
}`;

export const ENDPOINTS = {
  auth: {
    auth0Login: `${serverUrl}/service/custom/auth/login/authorizeUrl`,
    auth0Authenticate: `${serverUrl}/service/custom/auth/login/callback/WEB`,
  },
  employee: {
    login: `${serverUrl}/service/system/authenticate`,
  },
  performanceReview: {
    activeReviewsCount: `${serverUrl}/service/custom/auth/review/summary/notification`,
    pendingReviews: `${serverUrl}/service/custom/auth/review/list`,
    summaryStats: `${serverUrl}/service/custom/auth/review/header`,
    reviewForm: `${serverUrl}/service/custom/auth/review/form`,
    peerFeedback: `${serverUrl}/service/custom/auth/review/response`,
    submitReview: `${serverUrl}/service/custom/auth/review/submit`,
    reviewProviders: `${serverUrl}/service/custom/auth/review/providers`,
    acknowledge: `${serverUrl}/service/custom/auth/review/acknowledge`,
    nominatePeers: `${serverUrl}/service/custom/auth/review/peer/nominateList`,
    peerPool: `${serverUrl}/service/custom/auth/review/peer/pool`,
    peerPoolDetails: `${serverUrl}/service/custom/auth/review/peer/poolDetails`,
    peerAlerts: `${serverUrl}/service/custom/auth/review/peerAlert`,
    acceptNomination: `${serverUrl}/service/custom/auth/review/peer/accept`,
    rejectNomination: `${serverUrl}/service/custom/auth/review/peer/decline`,
    peerStatus: `${serverUrl}/service/custom/auth/review/peerStatus`,
    upwardStatus: `${serverUrl}/service/custom/auth/review/upwardStatus`,
    activeReviews: `${serverUrl}/service/custom/auth/review/summary/list/active`,
    archivedReviews: `${serverUrl}/service/custom/auth/review/summary/list/archived`,
    requestedReviews: `${serverUrl}/service/custom/auth/review/summary/list/requested`,
    teamReviews: `${serverUrl}/service/custom/auth/review/summary/list/team/v1`,
    peerType: `${serverUrl}/service/custom/auth/review/peer/peerType`,
    continuousFeedback: {
      share: `${serverUrl}/service/custom/auth/feedback/share`,
      get: (feedbackId: string) => `${serverUrl}/service/custom/auth/feedback/${feedbackId}`,
      request: `${serverUrl}/service/custom/auth/feedback/request`,
      shareRequested: (feedbackId: string) => `${serverUrl}/service/custom/auth/feedback/${feedbackId}/share`,
      archive: (feedbackId: string) => `${serverUrl}/service/custom/auth/feedback/${feedbackId}/archive`,
      accept: (feedbackId: string) => `${serverUrl}/service/custom/auth/feedback/${feedbackId}/accept`,
      decline: (feedbackId: string) => `${serverUrl}/service/custom/auth/feedback/${feedbackId}/decline`,
      stats: `${serverUrl}/service/custom/auth/review/summary/stats`,
      all: `${serverUrl}/service/custom/auth/review/summary/list/feedback`,
    },
    pastFeedbacks: `${serverUrl}/service/custom/auth/review/summary/list/profile/feedback`,
    documents: `${serverUrl}/service/custom/auth/review/documents`,
    faqs: `${serverUrl}/service/custom/auth/review/faqs`,
    timeline: `${serverUrl}/service/custom/auth/review/timeline`,
    publish: `${serverUrl}/service/custom/auth/review/summary/publish/manager`,
    unpublish: `${serverUrl}/service/custom/auth/review/summary/unpublish/manager`,
  },
};

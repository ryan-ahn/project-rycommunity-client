export const kakaoShare = (shareLink: string, title: string) => {
  // [force] : script init
  const Kakao = (window as any).kakao;
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title,
      description: '#라이언연구소 #연구 #랩 #논문',
      imageUrl:
        'https://community.ryan-ahn.com/wp-content/uploads/2021/09/ryan-ahn_square.png',
      link: {
        mobileWebUrl: shareLink,
        webUrl: shareLink,
      },
    },
    buttons: [{
      title: '자세히 보러가기!',
      link: {
        mobileWebUrl: shareLink,
        webUrl: shareLink,
      },
    }],
  });
};

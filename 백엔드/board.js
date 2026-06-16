/**
 * 로컬스토리지에서 기존 리뷰 목록을 가져오는 함수
 */
function getReviews() {
    const reviews = localStorage.getItem("cafeReviews");
    return reviews ? JSON.parse(reviews) : [];
}

/**
 * 새로운 한줄평 리뷰를 등록하는 함수
 * @param {string} nickname - 작성자 닉네임
 * @param {string} content - 한줄평 내용
 */
function addReview(nickname, content) {
    if (!nickname.trim() || !content.trim()) {
        alert("닉네임과 내용을 모두 입력해 주세요.");
        return;
    }

    const reviews = getReviews();
    const newReview = {
        id: Date.now(), // 고유한 ID 값으로 타임스탬프 활용
        nickname: nickname,
        content: content,
        date: new Date().toLocaleDateString() // 작성일자
    };

    reviews.push(newReview);
    localStorage.setItem("cafeReviews", JSON.stringify(reviews));
}
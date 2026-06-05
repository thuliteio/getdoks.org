// Put your custom JS code here
// Homepage FAQ accordion: keep only one <details> open at a time.
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    if (!body.classList.contains('home')) {
        return;
    }

    const faqDetails = document.querySelectorAll('.section-footer details');

    if (!faqDetails.length) {
        return;
    }

    let hasOpenDetail = false;
    faqDetails.forEach((detail) => {
        if (!detail.hasAttribute('open')) {
            return;
        }

        if (!hasOpenDetail) {
            hasOpenDetail = true;
            return;
        }

        detail.open = false;
        detail.removeAttribute('open');
    });

    faqDetails.forEach((detail) => {
        detail.addEventListener('toggle', () => {
            if (!detail.open) {
                return;
            }

            faqDetails.forEach((otherDetail) => {
                if (otherDetail !== detail) {
                    otherDetail.open = false;
                    otherDetail.removeAttribute('open');
                }
            });
        });
    });
});

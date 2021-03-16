import React from 'react'

export default function Comments() {
    return (
        <section className="pt-9 pb-11" id="reviews">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Heading */}
                        <h4 className="mb-10 text-center">Customer Reviews</h4>
                        {/* Header */}
                        <div className="row align-items-center">
                            <div className="col-12 col-md-auto">
                                {/* Dropdown */}
                                <div className="dropdown mb-4 mb-md-0">
                                    {/* Toggle */}
                                    <a className="dropdown-toggle text-reset" data-toggle="dropdown" href="#!">
                                        <strong>Sort by: Newest</strong>
                                    </a>
                                    {/* Menu */}
                                    <div className="dropdown-menu mt-3">
                                        <a className="dropdown-item" href="#!">Newest</a>
                                        <a className="dropdown-item" href="#!">Oldest</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md text-md-center">
                                {/* Rating */}
                                <div className="rating text-dark h6 mb-4 mb-md-0" data-value={4}>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                                {/* Count */}
                                <strong className="font-size-sm ml-2">Reviews (3)</strong>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Button */}
                                <a className="btn btn-sm btn-dark" data-toggle="collapse" href="#reviewForm">
                                    Write Review
                  </a>
                            </div>
                        </div>
                        {/* New Review */}
                        <div className="collapse" id="reviewForm">
                            {/* Divider */}
                            <hr className="my-8" />
                            {/* Form */}
                            <form>
                                <div className="row">
                                    <div className="col-12 mb-6 text-center">
                                        {/* Text */}
                                        <p className="mb-1 font-size-xs">
                                            Score:
                      </p>
                                        {/* Rating form */}
                                        <div className="rating-form">
                                            {/* Input */}
                                            <input className="rating-input" type="range" min={1} max={5} defaultValue={5} />
                                            {/* Rating */}
                                            <div className="rating h5 text-dark" data-value={5}>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Name */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="reviewName">Your Name:</label>
                                            <input className="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Email */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="reviewEmail">Your Email:</label>
                                            <input className="form-control form-control-sm" id="reviewEmail" type="email" placeholder="Your Email *" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Name */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="reviewTitle">Review Title:</label>
                                            <input className="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Name */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="reviewText">Review:</label>
                                            <textarea className="form-control form-control-sm" id="reviewText" rows={5} placeholder="Review *" required defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        {/* Button */}
                                        <button className="btn btn-outline-dark" type="submit">
                                            Post Review
                      </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Reviews */}
                        <div className="mt-8">
                            {/* Review */}
                            <div className="review">
                                <div className="review-body">
                                    <div className="row">
                                        <div className="col-12 col-md-auto">
                                            {/* Avatar */}
                                            <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                <span className="avatar-title rounded-circle">
                                                    <i className="fa fa-user" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Header */}
                                            <div className="row mb-6">
                                                <div className="col-12">
                                                    {/* Rating */}
                                                    <div className="rating font-size-sm text-dark" data-value={5}>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    {/* Time */}
                                                    <span className="font-size-xs text-muted">
                                                        Logan Edwards, <time dateTime="2019-07-25">25 Jul 2019</time>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Title */}
                                            <p className="mb-2 font-size-lg font-weight-bold">
                                                So cute!
                        </p>
                                            {/* Text */}
                                            <p className="text-gray-500">
                                                Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti
                                                lobortis nascetur. Ante laoreet odio hendrerit.
                                                Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.
                        </p>
                                            {/* Footer */}
                                            <div className="row align-items-center">
                                                <div className="col-auto d-none d-lg-block">
                                                    {/* Text */}
                                                    <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                </div>
                                                <div className="col-auto mr-auto">
                                                    {/* Rate */}
                                                    <div className="rate">
                                                        <a className="rate-item" data-toggle="vote" data-count={3} href="#!" role="button">
                                                            <i className="fe fe-thumbs-up" />
                                                        </a>
                                                        <a className="rate-item" data-toggle="vote" data-count={0} href="#!" role="button">
                                                            <i className="fe fe-thumbs-down" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-auto d-none d-lg-block">
                                                    {/* Text */}
                                                    <p className="mb-0 font-size-sm">Comments (0)</p>
                                                </div>
                                                <div className="col-auto">
                                                    {/* Button */}
                                                    <a className="btn btn-xs btn-outline-border" href="#!">
                                                        Comment
                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Review */}
                            <div className="review">
                                {/* Body */}
                                <div className="review-body">
                                    <div className="row">
                                        <div className="col-12 col-md-auto">
                                            {/* Avatar */}
                                            <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                <span className="avatar-title rounded-circle">
                                                    <i className="fa fa-user" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Header */}
                                            <div className="row mb-6">
                                                <div className="col-12">
                                                    {/* Rating */}
                                                    <div className="rating font-size-sm text-dark" data-value={3}>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    {/* Time */}
                                                    <span className="font-size-xs text-muted">
                                                        Sophie Casey, <time dateTime="2019-07-07">07 Jul 2019</time>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Title */}
                                            <p className="mb-2 font-size-lg font-weight-bold">
                                                Cute, but too small
                        </p>
                                            {/* Text */}
                                            <p className="text-gray-500">
                                                Shall good midst can't. Have fill own his multiply the divided. Thing great. Of heaven whose
                                                signs.
                        </p>
                                            {/* Footer */}
                                            <div className="row align-items-center">
                                                <div className="col-auto d-none d-lg-block">
                                                    {/* Text */}
                                                    <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                </div>
                                                <div className="col-auto mr-auto">
                                                    {/* Rate */}
                                                    <div className="rate">
                                                        <a className="rate-item" data-toggle="vote" data-count={2} href="#!" role="button">
                                                            <i className="fe fe-thumbs-up" />
                                                        </a>
                                                        <a className="rate-item" data-toggle="vote" data-count={1} href="#!" role="button">
                                                            <i className="fe fe-thumbs-down" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-auto d-none d-lg-block">
                                                    {/* Text */}
                                                    <p className="mb-0 font-size-sm">Comments (1)</p>
                                                </div>
                                                <div className="col-auto">
                                                    {/* Button */}
                                                    <a className="btn btn-xs btn-outline-border" href="#!">
                                                        Comment
                                                        </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Child review */}
                                <div className="review review-child">
                                    <div className="review-body">
                                        {/* Content */}
                                        <div className="row">
                                            <div className="col-12 col-md-auto">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                    <span className="avatar-title rounded-circle">
                                                        <i className="fa fa-user" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md">
                                                {/* Header */}
                                                <div className="row mb-6">
                                                    <div className="col-12">
                                                        {/* Rating */}
                                                        <div className="rating font-size-sm text-dark" data-value={4}>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        {/* Time */}
                                                        <span className="font-size-xs text-muted">
                                                            William Stokes, <time dateTime="2019-07-14">14 Jul 2019</time>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Title */}
                                                <p className="mb-2 font-size-lg font-weight-bold">
                                                    Very good
                                                    </p>
                                                {/* Text */}
                                                <p className="text-gray-500">
                                                    Made face lights yielding forth created for image behold blessed seas.
                                                    </p>
                                                {/* Footer */}
                                                <div className="row align-items-center">
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */}
                                                        <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                    </div>
                                                    <div className="col-auto mr-auto">
                                                        {/* Rate */}
                                                        <div className="rate">
                                                            <a className="rate-item" data-toggle="vote" data-count={7} href="#!" role="button">
                                                                <i className="fe fe-thumbs-up" />
                                                            </a>
                                                            <a className="rate-item" data-toggle="vote" data-count={0} href="#!" role="button">
                                                                <i className="fe fe-thumbs-down" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */}
                                                        <p className="mb-0 font-size-sm">Comments (0)</p>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* Button */}
                                                        <a className="btn btn-xs btn-outline-border" href="#!">
                                                            Comment
                                                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pagination */}
                        <nav className="d-flex justify-content-center mt-9">
                            <ul className="pagination pagination-sm text-gray-400">
                                <li className="page-item">
                                    <a className="page-link page-link-arrow" href="#!">
                                        <i className="fa fa-caret-left" />
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#!">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#!">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link page-link-arrow" href="#!">
                                        <i className="fa fa-caret-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

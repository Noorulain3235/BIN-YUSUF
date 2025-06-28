import { useState } from 'react';
import { Star, User, Calendar, MessageSquare, Edit3 } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "2025-04-28",
    rating: 5,
    product: "Vintage Denim Jacket",
    review: "I absolutely love this jacket! The fit is perfect and the quality is outstanding. I've received so many compliments when wearing it. Will definitely shop here again!",
    image: null
  },
  {
    id: 2,
    name: "Michael Chen",
    date: "2025-04-25",
    rating: 4,
    product: "Summer Linen Dress",
    review: "Beautiful dress with great material. The color is exactly as shown online. The only reason I'm giving 4 stars is that it runs slightly large. Otherwise, perfect summer outfit!",
    image: null
  },
  {
    id: 3,
    name: "Jessica Williams",
    date: "2025-04-22",
    rating: 5,
    product: "Classic White Tee",
    review: "This is now my go-to t-shirt! The fabric is so soft and it washes well without losing shape. I've already ordered two more in different colors.",
    image: null
  }
];

export default function CustomerReviewPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    product: '',
    review: '',
    image: null
  });
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReviewWithDetails = {
      ...newReview,
      id: reviews.length + 1,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReviewWithDetails, ...reviews]);
    setNewReview({
      name: '',
      rating: 5,
      product: '',
      review: '',
      image: null
    });
    setShowForm(false);
  };

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter(review => review.rating === parseInt(filter));

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Customer Reviews & Style Diary</h1>
          <p className="mt-2 text-gray-600 text-center">See what our customers are saying about their purchases</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-medium text-gray-900 ">Filter Reviews</h2>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === 'all' ? 'bg-[rgba(253,188,66,0.774)] text-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Reviews
              </button>
              {[5, 4, 3, 2, 1].map(rating => (
                <button
                  key={rating}
                  onClick={() => setFilter(rating.toString())}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    filter === rating.toString() ? 'bg-[rgba(253,188,66,0.774)] text-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {rating} ★
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center bg-[rgba(253,188,66,0.774)] hover:bg-[rgba(253,188,66,1)] text-black font-medium py-2 px-4 rounded-md"
          >
            <Edit3 size={18} className="mr-2" />
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={newReview.product}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map(rating => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => handleRatingChange(rating)}
                    className="focus:outline-none"
                  >
                    <Star
                      size={24}
                      className={rating <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700">Your Review</label>
              <textarea
                id="review"
                name="review"
                rows={4}
                value={newReview.review}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                placeholder="Share your thoughts about the product..."
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSubmit}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-[rgba(253,188,66,0.774)] hover:bg-[rgba(253,188,66,1)]"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-10">
              <MessageSquare size={48} className="mx-auto text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No reviews</h3>
              <p className="mt-1 text-sm text-gray-500">Be the first to share your experience!</p>
            </div>
          ) : (
            filteredReviews.map(review => (
              <div key={review.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full p-2">
                        <User size={24} className="text-gray-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                        <div className="flex items-center mt-1">
                          <div className="flex">{renderStars(review.rating)}</div>
                          <span className="ml-2 text-sm text-gray-500">for {review.product}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {review.date}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">{review.review}</p>
                  </div>
                  {review.image && (
                    <div className="mt-4">
                      <img
                        src="images/saasa.jfif"
                        alt="Customer photo"
                        className="h-24 w-24 object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

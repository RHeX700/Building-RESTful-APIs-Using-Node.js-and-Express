// const sinon = require("sinon");
const { expect } = require('chai');
const moviesService = require("../src/moviesService");

describe("Test movie service", () => {

  it("should return all movies", (done) => {
    // var getAll = sinon.stub(moviesService, "getMovies");
    moviesService.getMovies((err, results) => {
      movies_ = JSON.parse(results);

      expect(err).to.be.equals(null);
      expect(movies_).to.be.an("Array");
      expect(movies_.length).to.be.equals(7);
      expect(movies_[0].movieName).to.be.equal("True Grit");
      expect(movies_[1].movieName).to.be.equal("The Guard");
      expect(movies_[2].movieName).to.be.equal("E.T");
      expect(movies_[3].movieName).to.be.equal("Moonrise Kingdom");
      expect(movies_[4].movieName).to.be.equal("Gravity");
      expect(movies_[5].movieName).to.be.equal("Shawshank Redemption");
      expect(movies_[6].movieName).to.be.equal("Sherlock Holmes");
    });
    // sinon.assert.calledOnce(getAll);
    done();
    // getAll.restore();
  });

  it("should save movie and return that object", (done) => {
    let movie = {
      id: 2,
      movieName: "Shawshank Redemption",
      director: "Franklin",
      rating: "9.9",
    };
    // var create = sinon.stub(moviesService, "saveMovie");
    moviesService.saveMovie(movie, (err, results) => {
      let movies_ =JSON.parse(results);
      expect(err).to.be.equals(null);
      expect(movies_).to.be.an("Array");
      expect(movies_[7].movieName).to.be.equal(movie.movieName);
    });
    // sinon.assert.calledOnceWithMatch(create, movie);
    done();
    // create.restore();
  });


  it("should return movie given the movie id", (done) => {
    // var findById = sinon.stub(moviesService, "getMoviesById");
    moviesService.getMoviesById(3, (err, results) => {
      movie_ = JSON.parse(results)

      expect(err).to.equal(null);
      expect(movie_).to.be.an("Object");
      expect(movie_.movieName).to.be.equal("The Guard");
      expect(movie_.director).to.be.equal("John Michael McDonagh");
      expect(movie_.rating).to.be.equal("9.4");
    });
    // sinon.assert.calledOnce(findById);
    done();
    // findById.restore();
  });
  it("should update movie given the movie id", (done) => {
    // var updateById = sinon.stub(moviesService, "updateMovie");
    let updatedMovie = {
      id: 7,
      movieName: "Shawshank Redemption",
      director: "Franklin",
      rating: "9.9",
    };
    moviesService.updateMovie(
      updatedMovie.id,
      updatedMovie,
      (err, results) => {
        movies_ = JSON.parse(results);

        expect(err).to.equal(null);
        expect(movies_[5].movieName).to.be.equal("Shawshank Redemption");
        expect(movies_[5].director).to.be.equal("Franklin");
        expect(movies_[5].rating).to.be.equal("9.9");
      }
    );
    // sinon.assert.calledOnceWithMatch(updateById, updatedMovie.id, updatedMovie);
    done();
    // updateById.restore();
  });
  it("should delete movie given the movie id", (done) => {
    const id = 1;
    // var remove = sinon.stub(moviesService, "deleteMovieById");
    moviesService.deleteMovieById(id, (err, results) => {
      movies_ = JSON.parse(results);

      expect(err).to.be.equals(null);
      expect(movies_[0].movieName).to.be.equals("The Guard");
      expect(movies_[1].movieName).to.be.equals("E.T");
    });
    // sinon.assert.calledOnceWithMatch(remove, id);
    done();
    // remove.restore();
  });
});

import React, { useState, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { debounce } from "lodash";

const HomeLanding = ({ allFilm }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchResult = useMemo(() => {
    if (searchInput) {
      return allFilm.filter((item) => {
        return searchInput.toLowerCase() === ""
          ? null
          : item.EnglishTitle.toLowerCase().includes(searchInput);
      });
    }
  }, [allFilm, searchInput]);

  return (
    <div className="home-landing">
      <div className="BG">
        <div className="top">
          <img src="weblogo.png" alt="ethioflix logo" />
          <div className="input-btn">
            <input
              type="text"
              placeholder="Search Movies"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <div className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </div>

          <div className="search-result-container">
            {searchResult &&
              searchResult.map((movie) => (
                <NavLink
                  to={`home/${movie.id}`}
                  style={{ color: "white" }}
                  key={movie.id}
                >
                  <div className="result-row">
                    <div
                      className="search-img"
                      style={{ backgroundImage: `url(${movie.image})` }}
                    ></div>
                    <div className="result-info">
                      <h3 className="title">{movie.amharicTitle}</h3>

                      <div className="rating-duration-genre">
                        <p className="year">{movie.releaseYear}</p>
                        <span>&#729;</span>
                        <p className="duration">{movie.duration}</p>
                        <span>&#729;</span>
                        <p className="rating">{movie.rating}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
          <Link to="/home">
            <button>
              <h1>View Full Site</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
              </svg>
            </button>
          </Link>
        </div>
        <div className="home-desc">
          <div>
            Looking for the best mobile-friendly website to watch HD movies and
            TV shows online for free? Look no further, we are here to serve the
            interests. Simply type in the title of your choice in the search box
            or click on the movies button above to enjoy our high-quality
            content at no cost. As EthioFlix is mobile-friendly, you can enjoy
            our free movies and TV shows on the go, at anytime, from anywhere
            with your smartphone. We deliver what we state, so there will be no
            click baits, no fake links. Check us out and enjoy a premium
            watching experience for free!
          </div>
          <div>
            <h3> What is EthioFlix?</h3>
            EthioFlix is a free online movie streaming site where you can stream
            free movies and TV shows in HD quality. You can almost find any
            movie of interest here as we host a huge collection of contents for
            every genre and occasion such as Action, Comedy, History, Thriller,
            Sports, etc. We update new movies and show episodes on a daily basis
            to make sure our users can catch up with the cinematic world.
          </div>
          <div>
            <h3>Watch Movies online free on EthioFlix</h3>
            There are hundreds of movies and TV shows available for you to
            stream and download on EthioFlix. And it costs you nothing, not a
            single dime. There are absolutely no strings attached, you can visit
            us when you are in the mood for a movie or two, and pays nothing.
            The movies and TV shows are completely free as you don't even need
            to sign up or register to access our huge database. All you need is
            stable Internet, a device to watch, and your love for the cinematic
            world.
          </div>
          <div>
            <h3>Is EthioFlix Safe? Is it Legal to use EthioFlix?</h3>
            As no account or registration is needed, all of your information
            such as your name, email address, is kept safe. You can come and go,
            leaving no trace behind with a VPN. To avoid popups, you can also
            have your AdBlock extension on. At EthioFlix, you can stream your
            favorites without worries!
          </div>

          <h1 className="center">
            Why EthioFlix should be your movies streaming site?
          </h1>
          <div>
            <h3>1. EthioFlix provides you with a Safety streaming service</h3>
            There are thousands of free online movie streaming sites on the
            Internet but only a few of them are safe and reliable. How to weed
            out the bad, you might ask. Safe and reliable sites often don't
            require any registration and signup or create click baits. At
            EthioFlix, you can directly stream our content without having to pay
            any dime or leaving any information. Also, we stay true to our word,
            our links are honest so you don't have to waste time and energies on
            nonsense.
          </div>
          <div>
            <h3>
              2. Minimal UI design from EthioFlix makes it easier to stream on
              Mobile and Tablet
            </h3>
            We understand how important a well-organized and clean look matters
            to our users. People come to EthioFlix for entertainment, not hassle
            or headaches. Therefore, we bring you a minimal UI design to make
            browsing and navigating as easy as a piece of cake. If you already
            have a specific title in mind, simply enter the keywords into the
            search box. If you are digging new gems, either use our filter to
            search by genre, country, IMDB ranking, or scroll down for more
            suggestions.
          </div>
          <div>
            <h3>3. Huge content library</h3>
            No matter what you are looking for, you are highly likely to find it
            on EthioFlix. With tens of thousands of free movies and TV shows
            available, EthioFlix is confident to become your next best friend on
            the Internet. You can find here the latest releases as well as your
            childhood classics, Hollywood blockbusters as well as regional gems.
            New titles are also updated daily to create endless entertainment.
          </div>
          <div>
            <h3>
              4. EthioFlix gives better Streaming experience than any other
              service
            </h3>
            Everything becomes possible at EthioFlix. Here you can enjoy a
            premium watching experience at no cost. You can stream movies and TV
            shows in HD quality with little to no buffering thanks to the fast
            loading speed and seamless streaming features. The video starts
            right away after you hit the Play button and no ads jump in the
            middle.
          </div>
          <div>
            <h3>5. Device compatibility is what EthioFlix focus on</h3>
            EthioFlix app is available for Android devices. As the site is both
            mobile-friendly and Chromecast supported, you can stream its content
            on any device, be it smartphone or big screen TV, at any time and
            from anywhere.
          </div>
          <div>
            <h3>6. Only safe Ads and popups</h3>
            Ads and popups happen here and there as they are our only source of
            revenue. However, we understand how important it is for a seamless
            watching experience; therefore, there won't be any ads interrupting
            you while the video is being played, and we also check all the ads
            manually before applying on the site to make sure it's safe to our
            users.
          </div>
          <div>
            <h3>7. Great customer care</h3>
            Without you, we cannot even exist! Rest assured that at EthioFlix,
            you come first and foremost. You can connect with us via almost all
            big SNS platforms such as Twitter, Facebook, Telegram, WhatsApp,
            etc. Should there be any bugs or issues related to streaming links,
            please leave us a message and we will have it fixed in no time. Or
            if you cannot find the movie of interest, we are willing to receive
            your request and scour the Internet for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;

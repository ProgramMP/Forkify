import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector(`.bookmarks__list`);
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it!`;
  _message = ``;

  addHandlerRender(handler) {
    window.addEventListener(`load`, handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join(``);
  }
}

export default new BookmarksView();

/* <li class="preview">
  <a class="preview__link" href="#23456">
    <figure class="preview__fig">
      <img src="src/img/test-1.jpg" alt="Test" />
    </figure>
    <div class="preview__data">
      <h4 class="preview__name">Pasta with Tomato Cream ...</h4>
      <p class="preview__publisher">The Pioneer Woman</p>
    </div>
  </a>
</li>; */

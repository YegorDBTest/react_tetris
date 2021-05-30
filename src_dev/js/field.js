/** Tetris field piece. */
class FieldPiece {

    static TYPE_I = 'I';
    static TYPE_J = 'J';
    static TYPE_L = 'L';
    static TYPE_T = 'T';
    static TYPE_S = 'S';
    static TYPE_Z = 'Z';
    static TYPE_O = 'O';
    static ALL_TYPES = [
        FieldPiece.TYPE_I,
        FieldPiece.TYPE_J,
        FieldPiece.TYPE_L,
        FieldPiece.TYPE_T,
        FieldPiece.TYPE_S,
        FieldPiece.TYPE_Z,
        FieldPiece.TYPE_O,
    ];

    /**
     *   .. .. .. ..
     *   .. .. .. ..
     *   ## ## ## ##
     *   .. .. .. ..
     */
    static SUBTYPE_I_1 = 'I_1';
    /**
     *   .. ## .. ..
     *   .. ## .. ..
     *   .. ## .. ..
     *   .. ## .. ..
     */
    static SUBTYPE_I_2 = 'I_2';
    /**
     *   .. ## ##
     *   .. ## ..
     *   .. ## ..
     */
    static SUBTYPE_J_1 = 'J_1';
    /**
     *   ## .. ..
     *   ## ## ##
     *   .. .. ..
     */
    static SUBTYPE_J_2 = 'J_2';
    /**
     *   .. ## ..
     *   .. ## ..
     *   ## ## ..
     */
    static SUBTYPE_J_3 = 'J_3';
    /**
     *   .. .. ..
     *   ## ## ##
     *   .. .. ##
     */
    static SUBTYPE_J_4 = 'J_4';
    /**
     *   ## ## ..
     *   .. ## ..
     *   .. ## ..
     */
    static SUBTYPE_L_1 = 'L_1';
    /**
     *   .. .. ..
     *   ## ## ##
     *   ## .. ..
     */
    static SUBTYPE_L_2 = 'L_2';
    /**
     *   .. ## ..
     *   .. ## ..
     *   .. ## ##
     */
    static SUBTYPE_L_3 = 'L_3';
    /**
     *   .. .. ##
     *   ## ## ##
     *   .. .. ..
     */
    static SUBTYPE_L_4 = 'L_4';
    /**
     *   .. ## ..
     *   .. ## ##
     *   .. ## ..
     */
    static SUBTYPE_T_1 = 'T_1';
    /**
     *   .. ## ..
     *   ## ## ##
     *   .. .. ..
     */
    static SUBTYPE_T_2 = 'T_2';
    /**
     *   .. ## ..
     *   ## ## ..
     *   .. ## ..
     */
    static SUBTYPE_T_3 = 'T_3';
    /**
     *   .. .. ..
     *   ## ## ##
     *   .. ## ..
     */
    static SUBTYPE_T_4 = 'T_4';
    /**
     *   .. .. ..
     *   .. ## ##
     *   ## ## ..
     */
    static SUBTYPE_S_1 = 'S_1';
    /**
     *   .. ## ..
     *   .. ## ##
     *   .. .. ##
     */
    static SUBTYPE_S_2 = 'S_2';
    /**
     *   .. .. ..
     *   ## ## ..
     *   .. ## ##
     */
    static SUBTYPE_Z_1 = 'Z_1';
    /**
     *   .. .. ##
     *   .. ## ##
     *   .. ## ..
     */
    static SUBTYPE_Z_2 = 'Z_2';
    /**
     *   ## ##
     *   ## ##
     */
    static SUBTYPE_O_1 = 'O_1';

    static SUBTYPES = {
        [FieldPiece.TYPE_I]: [
            FieldPiece.SUBTYPE_I_1,
            FieldPiece.SUBTYPE_I_2,
        ],
        [FieldPiece.TYPE_J]: [
            FieldPiece.SUBTYPE_J_1,
            FieldPiece.SUBTYPE_J_2,
            FieldPiece.SUBTYPE_J_3,
            FieldPiece.SUBTYPE_J_4,
        ],
        [FieldPiece.TYPE_L]: [
            FieldPiece.SUBTYPE_L_1,
            FieldPiece.SUBTYPE_L_2,
            FieldPiece.SUBTYPE_L_3,
            FieldPiece.SUBTYPE_L_4,
        ],
        [FieldPiece.TYPE_T]: [
            FieldPiece.SUBTYPE_T_1,
            FieldPiece.SUBTYPE_T_2,
            FieldPiece.SUBTYPE_T_3,
            FieldPiece.SUBTYPE_T_4,
        ],
        [FieldPiece.TYPE_S]: [
            FieldPiece.SUBTYPE_S_1,
            FieldPiece.SUBTYPE_S_2,
        ],
        [FieldPiece.TYPE_Z]: [
            FieldPiece.SUBTYPE_Z_1,
            FieldPiece.SUBTYPE_Z_2,
        ],
        [FieldPiece.TYPE_O]: [
            FieldPiece.SUBTYPE_O_1,
        ],
    };

    static SUBTYPES_SQUARES = {
        [FieldPiece.SUBTYPE_I_1]: [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}],
        [FieldPiece.SUBTYPE_I_2]: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}],
        [FieldPiece.SUBTYPE_J_1]: [{x: 1, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_J_2]: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [FieldPiece.SUBTYPE_J_3]: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_J_4]: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 2}],
        [FieldPiece.SUBTYPE_L_1]: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_L_2]: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}],
        [FieldPiece.SUBTYPE_L_3]: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}],
        [FieldPiece.SUBTYPE_L_4]: [{x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [FieldPiece.SUBTYPE_T_1]: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_T_2]: [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [FieldPiece.SUBTYPE_T_3]: [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_T_4]: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_S_1]: [{x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_S_2]: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 2}],
        [FieldPiece.SUBTYPE_Z_1]: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}],
        [FieldPiece.SUBTYPE_Z_2]: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_O_1]: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}],
    };
    static SUBTYPES_INITIAL_SQUARES = {
        [FieldPiece.SUBTYPE_I_1]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_I_2]: {x: 4, y: -4},
        [FieldPiece.SUBTYPE_J_1]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_J_2]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_J_3]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_J_4]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_L_1]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_L_2]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_L_3]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_L_4]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_T_1]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_T_2]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_T_3]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_T_4]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_S_1]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_S_2]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_Z_1]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_Z_2]: {x: 3, y: -3},
        [FieldPiece.SUBTYPE_O_1]: {x: 4, y: -2},
    };

    /**
     * Creation.
     * @param {Field} field - Field.
     */
    constructor(field) {
        this._field = field;
        this._type = FieldPiece.ALL_TYPES[Math.floor(Math.random() * FieldPiece.ALL_TYPES.length)];
        this._subtypeIndex = Math.floor(Math.random() * this.subtypesGroup.length);
        let angleSquareTemplate = FieldPiece.SUBTYPES_INITIAL_SQUARES[this.subtype];
        this._angleSquare = {x: angleSquareTemplate.x, y: angleSquareTemplate.y};
        this._squares = this._getSquares() || [];
    }

    /**
     * Iterator.
     * @returns {Generator} Piece squares.
     */
    *[Symbol.iterator]() {
        for (let square of this._squares) {
            yield square;
        }
    }

    /**
     * Subtype.
     * @returns {string}
     */
    get subtype() {
        return this.subtypesGroup[this._subtypeIndex];
    }

    /**
     * Subtypes group.
     * @returns {string[]}
     */
    get subtypesGroup() {
        return FieldPiece.SUBTYPES[this._type];
    }

    /**
     * Subtype squares.
     * @returns {Object[]}
     */
    get subtypeSquares() {
        return FieldPiece.SUBTYPES_SQUARES[this.subtype];
    }

    /**
     * Rotate.
     * @returns {boolean} Whether rotate is successful or not.
     */
    rotate() {
        let latestSubtypeIndex = this._subtypeIndex;
        this._subtypeIndex++;
        if (this._subtypeIndex >= this.subtypesGroup.length) {
            this._subtypeIndex = 0;
        }
        let newSquares = this._getSquares();
        if (!newSquares) {
            this._subtypeIndex = latestSubtypeIndex;
            return false;
        }
        this._squares = newSquares;
        return true;
    }

    /**
     * Move down.
     * @returns {boolean} Whether move is successful or not.
     */
    moveDown() {
        return this._move({y: 1});
    }

    /**
     * Move left.
     * @returns {boolean} Whether move is successful or not.
     */
    moveLeft() {
        return this._move({x: -1});
    }

    /**
     * Move right.
     * @returns {boolean} Whether move is successful or not.
     */
    moveRight() {
        return this._move({x: 1});
    }

    /**
     * Move.
     * @param {Object} delta - Number of squares piece move to.
     * @param {number} [delta.x=0] - Number of x squares piece move to.
     * @param {number} [delta.y=0] - Number of y squares piece move to.
     * @returns {boolean} Whether move is successful or not.
     * @private
     */
    _move(delta) {
        delta = {x: 0, y: 0, ...delta};
        this._angleSquare.x += delta.x;
        this._angleSquare.y += delta.y;
        let newSquares = this._getSquares();
        if (!newSquares) {
            this._angleSquare.x -= delta.x;
            this._angleSquare.y -= delta.y;
            return false;
        }
        this._squares = newSquares;
        return true;
    }

    /**
     * Get squares.
     * @returns {null|Object[]}
     * @private
     */
    _getSquares() {
        let result = [];
        for (let square of this.subtypeSquares) {
            let s = {
                x: square.x + this._angleSquare.x,
                y: square.y + this._angleSquare.y,
            };
            if (s.x < 0 || s.x >= this._field.width || s.y >= this._field.height) {
                return null;
            }
            if (s.y < 0) continue;
            if (!this._field.isSquareFree(s.x, s.y)) {
                return null;
            }
            result.push(s);
        }
        return result;
    }
}


/** Tetris field. */
class Field {
    static SPEED_LOW = 1;
    static SPEED_NORMAL = 2;
    static SPEED_HIGH = 3;
    static LAG_BY_SPEED = {
      [Field.SPEED_LOW]: 1000,
      [Field.SPEED_NORMAL]: 500,
      [Field.SPEED_HIGH]: 250,
    };

    static COLORS = {
        background: '#f8f5f1',
        backgroundNet: '#45526c',
        solidSquares: '#5aa897',
        pieceSquares: '#f8a488',
    };

    static POINTS_BY_LINES = {
        1: 100,
        2: 300,
        3: 700,
        4: 1500,
    };

    static KEYDOWN_HANDLERS = {
        ArrowLeft: '_movePieceLeft',
        ArrowRight: '_movePieceRight',
        ArrowDown: '_movePieceDown',
        Space: '_rotatePiece',
        KeyP: '_pausePlay',
    };

    /**
     * Creation.
     * @param {number} width - Field width.
     * @param {number} height - Field height.
     */
    constructor(width, height) {
        this._width = width;
        this._height = height;
        this._squareSide = 10;
        this._piece = null;
        this._nextPiece = null;
        this._pieceInterval = null;
        this._points = 0;
        this._removedLinesCount = 0;
        this._speed = Field.SPEED_LOW;
        this._paused = false;
        this._end = false;

        this._matrix = [];
        for (let i = 0; i < height; i++) {
            this._matrix.push(this._createEmptyRow());
        }

        this._screen = new TDG.screen.Screen('field-element', {
            dimensions: [width * this._squareSide + 1, height * this._squareSide + 1],
        });
        this._screen.addLayer('background', new TDG.layers.CanvasLayer);
        this._screen.addLayer('static', new TDG.layers.CanvasLayer);
        this._screen.addLayer('dynamic', new TDG.layers.CanvasLayer);

        this._previewScreen = new TDG.screen.Screen('preview-element', {
            dimensions: [4 * this._squareSide + 1, 4 * this._squareSide + 1],
        });
        this._previewScreen.addLayer('background', new TDG.layers.CanvasLayer);
        this._previewScreen.addLayer('static', new TDG.layers.CanvasLayer);

        this._drawMainBackground();
        this._drawPreviewBackground();
        this._addPiece();

        document.addEventListener('keydown', (e) => {
            let handler = Field.KEYDOWN_HANDLERS[e.code];
            if (!handler) return;
            this[handler]();
        });
        document.addEventListener('setPlay', (e) => {
            this._play();
        });
        document.addEventListener('setPause', (e) => {
            this._pause();
        });
        document.addEventListener('setEnd', (e) => {
            this._end = true;
        });
        document.addEventListener('increaseSpeed', (e) => {
            this._increaseSpeed();
        });
        document.addEventListener('decreaseSpeed', (e) => {
            this._decreaseSpeed();
        });
    }

    /**
     * Width.
     * @returns {number}
     */
    get width() {
        return this._width;
    }

    /**
     * Height.
     * @returns {number}
     */
    get height() {
        return this._height;
    }

    /**
     * Check whether piece is active or not.
     * @returns {boolean}
     */
    get isPieceActive() {
        return !!(this._piece && !this._paused && !this._end);
    }

    /**
     * Check whether square is free or not.
     * @param {number} x - X square coordinate.
     * @param {number} y - Y square coordinate.
     * @returns {boolean} Check result.
     */
    isSquareFree(x, y) {
        return !this._matrix[y][x];
    }

    /**
     * Add piece.
     * @private
     */
    _addPiece() {
        if (this._piece || this._end) return;
        this._piece = this._nextPiece || new FieldPiece(this);
        this._nextPiece = new FieldPiece(this);
        this._refreshPieceSquares();
        this._refreshPreviewSquares();
        this._play();
    }

    /**
     * Rotate piece.
     * @private
     */
    _rotatePiece() {
        if (!this.isPieceActive) return;
        if (this._piece.rotate()) {
            this._refreshPieceSquares();
        }
    }

    /**
     * Move piece down.
     * @private
     */
    _movePieceDown() {
        if (!this.isPieceActive) return;
        if (this._piece.moveDown()) {
            this._refreshPieceSquares();
        } else {
            this._fixPiecePlacement();
        }
    }

    /**
     * Move piece left.
     * @private
     */
    _movePieceLeft() {
        if (!this.isPieceActive) return;
        if (this._piece.moveLeft()) {
            this._refreshPieceSquares();
        }
    }

    /**
     * Move piece right.
     * @private
     */
    _movePieceRight() {
        if (!this.isPieceActive) return;
        if (this._piece.moveRight()) {
            this._refreshPieceSquares();
        }
    }

    /**
     * Fix piece placement.
     * @private
     */
    _fixPiecePlacement() {
        clearInterval(this._pieceInterval);
        if (this._piece) {
            let squaresCount = 0;
            for (let square of this._piece || []) {
                this._fillSquare(square.x, square.y);
                squaresCount++;
            }
            if (squaresCount < 4) {
                document.dispatchEvent(new CustomEvent('setEnd'));
            }
        }
        this._addPoints();
        this._piece = null;
        this._refreshPieceSquares();
        this._addPiece();
    }

    /**
     * Pause or play.
     * @private
     */
    _pausePlay() {
        let eventName = this._paused ? 'setPlay' : 'setPause';
        document.dispatchEvent(new CustomEvent(eventName));
    }

    /**
     * Pause.
     * @private
     */
    _pause() {
        if (this._end) return;
        this._paused = true;
        clearInterval(this._pieceInterval);
    }

    /**
     * Play.
     * @private
     */
    _play() {
        if (this._end) return;
        this._paused = false;
        this._pieceInterval = setInterval(() => {
            this._movePieceDown();
        }, Field.LAG_BY_SPEED[this._speed]);
    }

    /**
     * Increase speed.
     * @private
     */
    _increaseSpeed() {
        if (this._speed == Field.SPEED_HIGH) return;
        this._speed++;
        this._fireSetSpeedEvent();
    }

    /**
     * Decrease speed.
     * @private
     */
    _decreaseSpeed() {
        if (this._speed == Field.SPEED_LOW) return;
        this._speed--;
        this._fireSetSpeedEvent();
    }

    /**
     * Fire set speed event.
     * @private
     */
    _fireSetSpeedEvent() {
      document.dispatchEvent(new CustomEvent('setSpeed', {detail: {
          value: this._speed,
      }}));
    }

    /**
     * Add points.
     * @private
     */
    _addPoints() {
        if (this._removedLinesCount === 0) return;
        let addition = Field.POINTS_BY_LINES[this._removedLinesCount];
        this._points += addition;
        this._removedLinesCount = 0;
        document.dispatchEvent(new CustomEvent('addPoints', {detail: {
            points: this._points,
            addition: addition,
        }}));
    }

    /**
     * Fill square.
     * @param {number} x - X square coordinate.
     * @param {number} y - Y square coordinate.
     * @private
     */
    _fillSquare(x, y) {
        this._matrix[y][x] = true;
        if (!this._matrix[y].some(s => !s)) {
            this._matrix.splice(y, 1);
            this._matrix.splice(0, 0, this._createEmptyRow());
            this._refreshSolidSquares();
            this._removedLinesCount++;
        } else {
            this._fillSolidSquaresRect(x, y);
        }
    }

    /**
     * Refresh piece squares rects fill.
     * @private
     */
    _refreshPieceSquares() {
        this._cleanLayerSquares(this._screen.layers.dynamic);
        for (let square of this._piece || []) {
            this._fillPieceSquaresRect(square.x, square.y);
        }
    }

    /**
     * Refresh solid squares rects fill.
     * @private
     */
    _refreshSolidSquares() {
        this._cleanLayerSquares(this._screen.layers.static);
        for (let y = 0; y < this._matrix.length; y++) {
            for (let x = 0; x < this._matrix[y].length; x++) {
                if (this._matrix[y][x]) {
                    this._fillSolidSquaresRect(x, y);
                }
            }
        }
    }

    /**
     * Refresh preview squares rects fill.
     * @private
     */
    _refreshPreviewSquares() {
        this._cleanLayerSquares(this._previewScreen.layers.static, {
            width: 4,
            height: 4,
        });
        for (let s of this._nextPiece.subtypeSquares) {
            this._fillPreviewSquaresRect(s.x, s.y);
        }
    }

    /**
     * Clean layer squares.
     * @param {TDG.layers.CanvasLayer} layer - Layer.
     * @param {Object} [options] - Options.
     * @param {number} [options.width] - Width.
     * @param {number} [options.height] - Height.
     * @private
     */
    _cleanLayerSquares(layer, options) {
        options = options || {};
        let width = (options.width || this._width) * this._squareSide;
        let height = (options.height || this._height) * this._squareSide;
        layer.ctx.clearRect(0, 0, width, height);
    }

    /**
     * Fill solid square rect.
     * @param {number} x - X square coordinate.
     * @param {number} y - Y square coordinate.
     * @private
     */
    _fillSolidSquaresRect(x, y) {
        this._fillSquareRect(x, y, this._screen.layers.static, Field.COLORS.solidSquares);
    }

    /**
     * Fill preview square rect.
     * @param {number} x - X square coordinate.
     * @param {number} y - Y square coordinate.
     * @private
     */
    _fillPreviewSquaresRect(x, y) {
        this._fillSquareRect(x, y, this._previewScreen.layers.static, Field.COLORS.pieceSquares);
    }

    /**
     * Fill piece square rect.
     * @param {number} x - X square coordinate.
     * @param {number} y - Y square coordinate.
     * @private
     */
    _fillPieceSquaresRect(x, y) {
        this._fillSquareRect(x, y, this._screen.layers.dynamic, Field.COLORS.pieceSquares);
    }

    /**
     * Fill square rect.
     * @param {number} x - X square coordinate.
     * @param {number} y - Y square coordinate.
     * @param {TDG.layers.CanvasLayer} layer - Layer.
     * @param {color} color - Fill color.
     * @private
     */
    _fillSquareRect(x, y, layer, color) {
        layer.ctx.fillStyle = color;
        let rectX = this._squareSide * x + 1;
        let rectY = this._squareSide * y + 1;
        let rectSide = this._squareSide - 1;
        layer.ctx.fillRect(rectX, rectY, rectSide, rectSide);
    }

    /**
     * Create empty row.
     * @returns {boolean[]} - Field row fill data.
     * @private
     */
    _createEmptyRow() {
        let row = [];
        for (let i = 0; i < this._width; i++) {
            row.push(false);
        }
        return row;
    }

    /**
     * Draw main background.
     * @private
     */
    _drawMainBackground() {
        this._drawBackground(this._screen, this._width, this._height);
    }

    /**
     * Draw preview background.
     * @private
     */
    _drawPreviewBackground() {
        this._drawBackground(this._previewScreen, 4, 4);
    }

    /**
     * Draw background.
     * @param {TDG.Screen} screen
     * @param {number} width
     * @param {number} height
     * @private
     */
    _drawBackground(screen, width, height) {
        screen.layers.background.ctx.fillStyle = Field.COLORS.background;
        screen.layers.background.ctx.fillRect(
            0, 0, width * this._squareSide + 1, height * this._squareSide + 1
        );

        screen.layers.background.ctx.strokeStyle = Field.COLORS.backgroundNet;
        screen.layers.background.ctx.beginPath();
        let maxX = width * this._squareSide;
        let maxY = height * this._squareSide;
        for (let i = 0; i <= width; i++) {
            let x = this._squareSide * i + 0.5;
            screen.layers.background.ctx.moveTo(x, 0);
            screen.layers.background.ctx.lineTo(x, maxY);
        }
        for (let j = 0; j <= height; j++) {
            let y = this._squareSide * j + 0.5;
            screen.layers.background.ctx.moveTo(0, y);
            screen.layers.background.ctx.lineTo(maxX, y);
        }
        screen.layers.background.ctx.stroke();
    }
}


module.exports = {
    Field: Field,
}

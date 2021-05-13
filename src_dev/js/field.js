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
        [FieldPiece.SUBTYPE_T_2]: [{x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [FieldPiece.SUBTYPE_T_3]: [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_T_4]: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_S_1]: [{x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_S_2]: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 2}],
        [FieldPiece.SUBTYPE_Z_1]: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}],
        [FieldPiece.SUBTYPE_Z_2]: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}],
        [FieldPiece.SUBTYPE_O_1]: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}],
    };
    static SUBTYPES_INITIAL_SQUARES = {
        [FieldPiece.SUBTYPE_I_1]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_I_2]: {x: 4, y: -3},
        [FieldPiece.SUBTYPE_J_1]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_J_2]: {x: 3, y: -1},
        [FieldPiece.SUBTYPE_J_3]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_J_4]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_L_1]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_L_2]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_L_3]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_L_4]: {x: 3, y: -1},
        [FieldPiece.SUBTYPE_T_1]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_T_2]: {x: 3, y: -1},
        [FieldPiece.SUBTYPE_T_3]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_T_4]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_S_1]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_S_2]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_Z_1]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_Z_2]: {x: 3, y: -2},
        [FieldPiece.SUBTYPE_O_1]: {x: 4, y: -1},
    };

    /**
     * Creation.
     * @param {Field} field - Field.
     */
    constructor(field) {
        this._field = field;
        this._squares = [
            {x: 4, y: 0},
        ];
        this._squaresDump = JSON.stringify(this._squares);
    }

    /**
     * Iterator (squares).
     * @returns {Generator<{x: number, y: number}, void, *>}
     */
    *[Symbol.iterator]() {
        for (let square of this._squares) {
            yield square;
        }
    }

    /**
     * Move down.
     * @returns {boolean} Whether move is successful or not.
     * @private
     */
    moveDown() {
        this._dumpSquares();
        for (let s of this) {
            s.y++;
            if (s.y >= this._field.height || !this._field.isSquareFree(s.x, s.y)) {
                this._loadSquares();
                return false;
            }
        }
        return true;
    }

    /**
     * Move left.
     * @returns {boolean} Whether move is successful or not.
     * @private
     */
    moveLeft() {
        return this._moveHorizontally(-1);
    }

    /**
     * Move right.
     * @returns {boolean} Whether move is successful or not.
     * @private
     */
    moveRight() {
        return this._moveHorizontally(1);
    }

    /**
     * Move horizontally.
     * @param {number} n - Number of squares piece move to.
     * @returns {boolean} Whether move is successful or not.
     * @private
     */
    _moveHorizontally(n) {
        this._dumpSquares();
        for (let s of this) {
            s.x += n;
            if (s.x < 0 || s.x >= this._field.width || !this._field.isSquareFree(s.x, s.y)) {
                this._loadSquares();
                return false;
            }
        }
        return true;
    }

    /**
     * Dump squares.
     * @private
     */
    _dumpSquares() {
        this._squaresDump = JSON.stringify(this._squares);
    }

    /**
     * Loads squares.
     * @private
     */
    _loadSquares() {
        this._squares = JSON.parse(this._squaresDump);
    }
}


/** Tetris field. */
class Field {

    static COLORS = {
        background: '#f8f5f1',
        backgroundNet: '#45526c',
        solidSquares: '#5aa897',
        pieceSquares: '#f8a488',
    };

    static KEYDOWN_HANDLERS = {
        ArrowLeft: '_movePieceLeft',
        ArrowRight: '_movePieceRight',
        ArrowDown: '_movePieceDown',
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
        this._pieceInterval = null;
        this._end = false;

        this._matrix = [];
        for (let i = 0; i < height; i++) {
            this._matrix.push(this._createEmptyRow());
        }

        this._screen = new TDG.screen.Screen('field-element', {
            dimensions: [width * this._squareSide + 1, height * this._squareSide + 1],
        });
        this._screen.addLayer('background', new TDG.layers.CanvasLayer);
        this._drawBackground();
        this._screen.addLayer('static', new TDG.layers.CanvasLayer);
        this._screen.addLayer('dynamic', new TDG.layers.CanvasLayer);
        this._addPiece();

        document.addEventListener('keydown', (e) => {
            let handler = Field.KEYDOWN_HANDLERS[e.code];
            if (!handler) return;
            this[handler]();
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
        this._piece = new FieldPiece(this);
        this._refreshPieceSquares();
        this._pieceInterval = setInterval(() => {
            this._movePieceDown();
        }, 1000);
    }

    /**
     * Move piece down.
     * @private
     */
    _movePieceDown() {
        if (!this._piece) return;
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
        if (!this._piece) return;
        if (this._piece.moveLeft()) {
            this._refreshPieceSquares();
        }
    }

    /**
     * Move piece right.
     * @private
     */
    _movePieceRight() {
        if (!this._piece) return;
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
        for (let square of this._piece || []) {
            this._fillSquare(square.x, square.y);
            if (square.y === 0) this._end = true;
        }
        this._piece = null;
        this._refreshPieceSquares();
        this._addPiece();
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
     * Clean layer squares.
     * @param {TDG.layers.CanvasLayer} layer - Layer.
     * @private
     */
    _cleanLayerSquares(layer) {
        layer.ctx.clearRect(0, 0, this._width * this._squareSide, this._height * this._squareSide);
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
     * Draw background.
     * @private
     */
    _drawBackground() {
        this._screen.layers.background.ctx.fillStyle = Field.COLORS.background;
        this._screen.layers.background.ctx.fillRect(
            0, 0, this._width * this._squareSide + 1, this._height * this._squareSide + 1
        );

        this._screen.layers.background.ctx.strokeStyle = Field.COLORS.backgroundNet;
        this._screen.layers.background.ctx.beginPath();
        let maxX = this._width * this._squareSide;
        let maxY = this._height * this._squareSide;
        for (let i = 0; i <= this._width; i++) {
            let x = this._squareSide * i + 0.5;
            this._screen.layers.background.ctx.moveTo(x, 0);
            this._screen.layers.background.ctx.lineTo(x, maxY);
        }
        for (let j = 0; j <= this._height; j++) {
            let y = this._squareSide * j + 0.5;
            this._screen.layers.background.ctx.moveTo(0, y);
            this._screen.layers.background.ctx.lineTo(maxX, y);
        }
        this._screen.layers.background.ctx.stroke();
    }
}


module.exports = {
    Field: Field,
}

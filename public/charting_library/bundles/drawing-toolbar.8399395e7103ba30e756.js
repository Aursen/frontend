(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2878],
  {
    42406: (e) => {
      e.exports = {
        dropdown: 'dropdown-191zO2Od',
        buttonWrap: 'buttonWrap-191zO2Od',
        control: 'control-191zO2Od',
        arrow: 'arrow-191zO2Od',
        arrowIcon: 'arrowIcon-191zO2Od',
        isOpened: 'isOpened-191zO2Od',
        hover: 'hover-191zO2Od',
        isGrayed: 'isGrayed-191zO2Od',
      };
    },
    14750: (e) => {
      e.exports = {
        container: 'container-3CL4Geq2',
        mirror: 'mirror-3CL4Geq2',
        background: 'background-3CL4Geq2',
        arrow: 'arrow-3CL4Geq2',
      };
    },
    65688: (e) => {
      e.exports = { item: 'item-3NgvBqLJ', label: 'label-3NgvBqLJ' };
    },
    24565: (e) => {
      e.exports = {
        drawingToolbar: 'drawingToolbar-2_so5thS',
        isHidden: 'isHidden-2_so5thS',
        inner: 'inner-2_so5thS',
        popupMenuItem: 'popupMenuItem-2_so5thS',
        group: 'group-2_so5thS',
        noGroupPadding: 'noGroupPadding-2_so5thS',
        lastGroup: 'lastGroup-2_so5thS',
        fill: 'fill-2_so5thS',
        separator: 'separator-2_so5thS',
      };
    },
    34482: (e) => {
      e.exports = {
        toggleButton: 'toggleButton-3zv4iS2j',
        collapsed: 'collapsed-3zv4iS2j',
        background: 'background-3zv4iS2j',
        arrow: 'arrow-3zv4iS2j',
      };
    },
    96982: (e) => {
      e.exports = {
        wrap: 'wrap-2qy9YC6D',
        smallTablet: 'smallTablet-2qy9YC6D',
        buttonIcon: 'buttonIcon-2qy9YC6D',
        item: 'item-2qy9YC6D',
        hovered: 'hovered-2qy9YC6D',
        active: 'active-2qy9YC6D',
        title: 'title-2qy9YC6D',
        separator: 'separator-2qy9YC6D',
        button: 'button-2qy9YC6D',
      };
    },
    24816: (e) => {
      e.exports = {
        wrap: 'wrap-379NmUSU',
        scrollWrap: 'scrollWrap-379NmUSU',
        noScrollBar: 'noScrollBar-379NmUSU',
        content: 'content-379NmUSU',
        icon: 'icon-379NmUSU',
        scrollBot: 'scrollBot-379NmUSU',
        scrollTop: 'scrollTop-379NmUSU',
        isVisible: 'isVisible-379NmUSU',
        iconWrap: 'iconWrap-379NmUSU',
        fadeBot: 'fadeBot-379NmUSU',
        fadeTop: 'fadeTop-379NmUSU',
      };
    },
    64526: (e) => {
      e.exports = {
        wrap: 'wrap-164vy-kj',
        positionBottom: 'positionBottom-164vy-kj',
        backdrop: 'backdrop-164vy-kj',
        drawer: 'drawer-164vy-kj',
        positionLeft: 'positionLeft-164vy-kj',
      };
    },
    23788: (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { DrawingToolbarRenderer: () => et });
      var i = o(67294),
        n = o(73935),
        s = o(16282),
        a = o(79881),
        l = o(94184),
        r = o.n(l),
        c = o(96404),
        h = o(64222),
        d = o(27490),
        u = o(15521),
        m = o(70599),
        p = o(18437),
        g = o(5729),
        b = o.n(g),
        v = o(43367),
        _ = (o(22900), o(21259));
      class T {
        constructor(e) {
          this._drawingsAccess = e || { tools: [], type: 'black' };
        }
        isToolEnabled(e) {
          const t = this._findTool(e);
          return (
            !(!t || !t.grayed) ||
            ('black' === this._drawingsAccess.type ? !t : !!t)
          );
        }
        isToolGrayed(e) {
          const t = this._findTool(e);
          return Boolean(t && t.grayed);
        }
        _findTool(e) {
          return this._drawingsAccess.tools.find((t) => t.name === e);
        }
      }
      var C = o(67869),
        w = o(42998);
      const k = [
        {
          id: 'linetool-group-cursors',
          title: (0, a.t)('Cursors'),
          items: [
            { name: 'cursor' },
            { name: 'dot' },
            { name: 'arrow' },
            { name: 'eraser' },
          ],
          trackLabel: null,
        },
        {
          id: 'linetool-group-trend-line',
          title: (0, a.t)('Trend Line Tools'),
          items: [
            { name: 'LineToolTrendLine', hotkeyHash: w.Modifiers.Alt + 84 },
            { name: 'LineToolArrow' },
            { name: 'LineToolRay' },
            { name: 'LineToolInfoLine' },
            { name: 'LineToolExtended' },
            { name: 'LineToolTrendAngle' },
            { name: 'LineToolHorzLine', hotkeyHash: w.Modifiers.Alt + 72 },
            { name: 'LineToolHorzRay', hotkeyHash: w.Modifiers.Alt + 74 },
            { name: 'LineToolVertLine', hotkeyHash: w.Modifiers.Alt + 86 },
            { name: 'LineToolCrossLine', hotkeyHash: w.Modifiers.Alt + 67 },
            { name: 'LineToolParallelChannel' },
            { name: 'LineToolRegressionTrend' },
            {
              name: 'LineToolFlatBottom',
            },
            { name: 'LineToolDisjointAngle' },
            null,
          ].filter(Boolean),
          trackLabel: null,
        },
        {
          id: 'linetool-group-gann-and-fibonacci',
          title: (0, a.t)('Gann and Fibonacci Tools'),
          items: [
            {
              name: 'LineToolFibRetracement',
              hotkeyHash: w.Modifiers.Alt + 70,
            },
            { name: 'LineToolTrendBasedFibExtension' },
            { name: 'LineToolPitchfork' },
            { name: 'LineToolSchiffPitchfork2' },
            { name: 'LineToolSchiffPitchfork' },
            { name: 'LineToolInsidePitchfork' },
            { name: 'LineToolFibChannel' },
            { name: 'LineToolFibTimeZone' },
            { name: 'LineToolGannSquare' },
            { name: 'LineToolGannFixed' },
            { name: 'LineToolGannComplex' },
            { name: 'LineToolGannFan' },
            { name: 'LineToolFibSpeedResistanceFan' },
            { name: 'LineToolTrendBasedFibTime' },
            { name: 'LineToolFibCircles' },
            { name: 'LineToolPitchfan' },
            { name: 'LineToolFibSpiral' },
            { name: 'LineToolFibSpeedResistanceArcs' },
            { name: 'LineToolFibWedge' },
          ],
          trackLabel: null,
        },
        {
          id: 'linetool-group-geometric-shapes',
          title: (0, a.t)('Geometric Shapes'),
          items: [
            { name: 'LineToolBrush' },
            { name: 'LineToolHighlighter' },
            { name: 'LineToolRectangle' },
            { name: 'LineToolCircle' },
            { name: 'LineToolEllipse' },
            { name: 'LineToolPath' },
            { name: 'LineToolBezierQuadro' },
            { name: 'LineToolPolyline' },
            { name: 'LineToolTriangle' },
            { name: 'LineToolRotatedRectangle' },
            { name: 'LineToolArc' },
            { name: 'LineToolBezierCubic' },
          ],
          trackLabel: null,
        },
        {
          id: 'linetool-group-annotation',
          title: (0, a.t)('Annotation Tools'),
          items: [
            { name: 'LineToolText' },
            { name: 'LineToolTextAbsolute' },
            { name: 'LineToolNote' },
            { name: 'LineToolNoteAbsolute' },
            { name: 'LineToolSignpost' },
            null,
            null,
            { name: 'LineToolCallout' },
            { name: 'LineToolBalloon' },
            { name: 'LineToolPriceLabel' },
            { name: 'LineToolPriceNote' },
            { name: 'LineToolArrowMarker' },
            { name: 'LineToolArrowMarkLeft' },
            { name: 'LineToolArrowMarkRight' },
            { name: 'LineToolArrowMarkUp' },
            { name: 'LineToolArrowMarkDown' },
            { name: 'LineToolFlagMark' },
          ].filter(Boolean),
          trackLabel: null,
        },
        {
          id: 'linetool-group-patterns',
          title: (0, a.t)('Patterns'),
          items: [
            { name: 'LineTool5PointsPattern' },
            { name: 'LineToolCypherPattern' },
            { name: 'LineToolABCD' },
            { name: 'LineToolTrianglePattern' },
            { name: 'LineToolThreeDrivers' },
            { name: 'LineToolHeadAndShoulders' },
            { name: 'LineToolElliottImpulse' },
            { name: 'LineToolElliottTriangle' },
            { name: 'LineToolElliottTripleCombo' },
            { name: 'LineToolElliottCorrection' },
            { name: 'LineToolElliottDoubleCombo' },
            { name: 'LineToolCircleLines' },
            { name: 'LineToolTimeCycles' },
            { name: 'LineToolSineLine' },
          ],
          trackLabel: null,
        },
        {
          id: 'linetool-group-prediction-and-measurement',
          title: (0, a.t)('Prediction and Measurement Tools'),
          items: [
            { name: 'LineToolRiskRewardLong' },
            { name: 'LineToolRiskRewardShort' },
            { name: 'LineToolPrediction' },
            { name: 'LineToolDateRange' },
            { name: 'LineToolPriceRange' },
            { name: 'LineToolDateAndPriceRange' },
            { name: 'LineToolBarsPattern' },
            (0, C.isFeatureEnabled)('remove-line-tool-ghost-feed')
              ? null
              : { name: 'LineToolGhostFeed' },
            { name: 'LineToolProjection' },
            { name: 'LineToolFixedRangeVolumeProfile' },
          ].filter(Boolean),
          trackLabel: null,
        },
      ];
      var S = o(90096),
        f = o(5383),
        y = o(49775),
        L = o(99432),
        M = o(83939),
        D = o(24816),
        E = o(38508);
      class A extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._scroll = null),
            (this._handleScrollTop = () => {
              this.animateTo(
                Math.max(
                  0,
                  this.currentPosition() - (this.state.heightWrap - 50),
                ),
              );
            }),
            (this._handleScrollBot = () => {
              this.animateTo(
                Math.min(
                  (this.state.heightContent || 0) -
                    (this.state.heightWrap || 0),
                  this.currentPosition() + (this.state.heightWrap - 50),
                ),
              );
            }),
            (this._handleResizeWrap = ({ height: e }) => {
              this.setState({ heightWrap: e });
            }),
            (this._handleResizeContent = ({ height: e }) => {
              this.setState({ heightContent: e });
            }),
            (this._handleScroll = () => {
              const { onScroll: e } = this.props;
              e && e(this.currentPosition(), this.isAtTop(), this.isAtBot()),
                this._checkButtonsVisibility();
            }),
            (this._checkButtonsVisibility = () => {
              const { isVisibleTopButton: e, isVisibleBotButton: t } =
                  this.state,
                o = this.isAtTop(),
                i = this.isAtBot();
              o || e
                ? o && e && this.setState({ isVisibleTopButton: !1 })
                : this.setState({ isVisibleTopButton: !0 }),
                i || t
                  ? i && t && this.setState({ isVisibleBotButton: !1 })
                  : this.setState({ isVisibleBotButton: !0 });
            }),
            (this.state = {
              heightContent: 0,
              heightWrap: 0,
              isVisibleBotButton: !1,
              isVisibleTopButton: !1,
            });
        }
        componentDidMount() {
          this._checkButtonsVisibility();
        }
        componentDidUpdate(e, t) {
          (t.heightWrap === this.state.heightWrap &&
            t.heightContent === this.state.heightContent) ||
            this._handleScroll();
        }
        currentPosition() {
          return this._scroll ? this._scroll.scrollTop : 0;
        }
        isAtTop() {
          return this.currentPosition() <= 1;
        }
        isAtBot() {
          return (
            this.currentPosition() + this.state.heightWrap >=
            this.state.heightContent - 1
          );
        }
        animateTo(e, t = M.dur) {
          const o = this._scroll;
          o &&
            (0, L.doAnimate)({
              onStep(e, t) {
                o.scrollTop = t;
              },
              from: o.scrollTop,
              to: Math.round(e),
              easing: M.easingFunc.easeInOutCubic,
              duration: t,
            });
        }
        render() {
          const {
              children: e,
              isVisibleScrollbar: t,
              isVisibleFade: o,
              isVisibleButtons: n,
              onMouseOver: s,
              onMouseOut: a,
            } = this.props,
            {
              heightContent: l,
              heightWrap: c,
              isVisibleBotButton: h,
              isVisibleTopButton: d,
            } = this.state;
          return i.createElement(
            f,
            { whitelist: ['height'], onMeasure: this._handleResizeWrap },
            i.createElement(
              'div',
              { className: D.wrap, onMouseOver: s, onMouseOut: a },
              i.createElement(
                'div',
                {
                  className: r()(D.scrollWrap, { [D.noScrollBar]: !t }),
                  onScroll: this._handleScroll,
                  ref: (e) => (this._scroll = e),
                },
                i.createElement(
                  f,
                  {
                    onMeasure: this._handleResizeContent,
                    whitelist: ['height'],
                  },
                  i.createElement('div', { className: D.content }, e),
                ),
              ),
              o &&
                i.createElement('div', {
                  className: r()(D.fadeTop, { [D.isVisible]: d && l > c }),
                }),
              o &&
                i.createElement('div', {
                  className: r()(D.fadeBot, { [D.isVisible]: h && l > c }),
                }),
              n &&
                i.createElement(
                  'div',
                  {
                    className: r()(D.scrollTop, { [D.isVisible]: d && l > c }),
                    onClick: this._handleScrollTop,
                  },
                  i.createElement(
                    'div',
                    { className: D.iconWrap },
                    i.createElement(y.Icon, { icon: E, className: D.icon }),
                  ),
                ),
              n &&
                i.createElement(
                  'div',
                  {
                    className: r()(D.scrollBot, { [D.isVisible]: h && l > c }),
                    onClick: this._handleScrollBot,
                  },
                  i.createElement(
                    'div',
                    { className: D.iconWrap },
                    i.createElement(y.Icon, { icon: E, className: D.icon }),
                  ),
                ),
            ),
          );
        }
      }
      A.defaultProps = { isVisibleScrollbar: !0 };
      var N = o(60934),
        B = o(79424),
        I = o(49585);
      function P(e) {
        const {
          id: t,
          action: o,
          isActive: n,
          isHidden: s,
          isTransparent: a,
          toolName: l,
        } = e;
        return i.createElement(I.ToolButton, {
          id: t,
          icon: _.lineToolsInfo[l].icon,
          isActive: n,
          isHidden: s,
          isTransparent: a,
          onClick: o,
          title: _.lineToolsInfo[l].localizedName,
          'data-name': l,
        });
      }
      var W = o(18130);
      const F = [
        61536, 61537, 61538, 61539, 61725, 61726, 61575, 61576, 61796, 61797,
        61779, 61780, 61781, 61782, 61783, 61784, 61785, 61786, 61440, 61441,
        61442, 61444, 61445, 61446, 61447, 61448, 61452, 61453, 61454, 61456,
        61457, 61458, 61459, 61460, 61461, 61463, 61464, 61466, 61467, 61469,
        61470, 61473, 61475, 61476, 61488, 61502, 61504, 61505, 61507, 61510,
        61523, 61524, 61525, 61526, 61527, 61528, 61529, 61530, 61531, 61532,
        61533, 61534, 61540, 61541, 61542, 61543, 61544, 61545, 61546, 61547,
        61548, 61550, 61552, 61553, 61554, 61555, 61557, 61558, 61559, 61560,
        61565, 61566, 61568, 61572, 61574, 61578, 61588, 61597, 61601, 61602,
        61603, 61604, 61605, 61606, 61607, 61608, 61609, 61610, 61611, 61616,
        61617, 61635, 61648, 61649, 61654, 61655, 61656, 61657, 61658, 61659,
        61666, 61667, 61669, 61670, 61671, 61672, 61673, 61675, 61681, 61682,
        61683, 61684, 61696, 61697, 61698, 61699, 61700, 61701, 61702, 61703,
        61704, 61705, 61706, 61707, 61708, 61712, 61713, 61714, 61715, 61720,
        61721, 61722, 61731, 61732, 61736, 61737, 61738, 61746, 61747, 61748,
        61749, 61751, 61752, 61753, 61754, 61757, 61758, 61760, 61764, 61768,
        61769, 61770, 61771, 61772, 61773, 61774, 61776, 61777, 61778, 61799,
        61811, 61812, 61813, 61814, 61815, 61816, 61817, 61818, 61819, 61820,
        61821, 61826, 61827, 61828, 61829, 61830, 61831, 61832, 61836, 61838,
        61840, 61842, 61845,
      ];
      var V = o(76420),
        O = o(74818),
        x = o(57374),
        U = o(47642),
        R = o(42406);
      class z extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._toggleDropdown = (e) => {
              this.setState({
                isOpened: void 0 !== e ? e : !this.state.isOpened,
              });
            }),
            (this._handleClose = () => {
              this._toggleDropdown(!1);
            }),
            (this._getDropdownPosition = () => {
              if (!this._control) return { x: 0, y: 0 };
              const e = this._control.getBoundingClientRect();
              return { x: e.left + e.width + 1, y: e.top - 6 };
            }),
            (this._handleClickArrow = () => {
              var e, t;
              null === (t = (e = this.props).onArrowClick) ||
                void 0 === t ||
                t.call(e),
                this._toggleDropdown();
            }),
            (this._handleTouchStart = () => {
              this.props.onClickButton && this.props.onClickButton(),
                this._toggleDropdown();
            }),
            (this._handlePressStart = () => {
              if (c.mobiletouch && !this.props.checkable)
                !this._longPressDelay &&
                  this.props.onClickButton &&
                  this.props.onClickButton();
              else {
                if (this._doubleClickDelay)
                  return (
                    clearTimeout(this._doubleClickDelay),
                    delete this._doubleClickDelay,
                    void this._toggleDropdown(!0)
                  );
                this._doubleClickDelay = setTimeout(() => {
                  delete this._doubleClickDelay,
                    !this._longPressDelay &&
                      this.props.onClickButton &&
                      this.props.onClickButton();
                }, 175);
              }
              this._longPressDelay = setTimeout(() => {
                delete this._longPressDelay, this._toggleDropdown(!0);
              }, 300);
            }),
            (this._cancelAllTimeouts = () => {
              clearTimeout(this._longPressDelay),
                delete this._longPressDelay,
                clearTimeout(this._doubleClickDelay),
                delete this._doubleClickDelay;
            }),
            (this._handleTouchPressEnd = (e) => {
              e.cancelable && e.preventDefault(), this._handlePressEnd();
            }),
            (this._handlePressEnd = () => {
              this._longPressDelay &&
                (clearTimeout(this._longPressDelay),
                delete this._longPressDelay,
                this.state.isOpened
                  ? this._toggleDropdown(!1)
                  : this.props.checkable ||
                    this.state.isOpened ||
                    !this.props.isActive ||
                    c.mobiletouch
                  ? !this._doubleClickDelay &&
                    this.props.onClickButton &&
                    this.props.onClickButton()
                  : this._toggleDropdown(!0));
            }),
            (this.state = { isOpened: !1 });
        }
        render() {
          const {
              buttonActiveClass: e,
              buttonClass: t,
              buttonIcon: o,
              buttonTitle: n,
              buttonHotKey: s,
              dropdownTooltip: a,
              children: r,
              isActive: h,
              isGrayed: d,
              onClickWhenGrayed: u,
              checkable: m,
              isSmallTablet: p,
            } = this.props,
            { isOpened: g } = this.state,
            b = (0, O.filterDataProps)(this.props);
          return i.createElement(
            'div',
            {
              className: l(R.dropdown, {
                [R.isGrayed]: d,
                [R.isActive]: h,
                [R.isOpened]: g,
              }),
              onClick: d ? u : void 0,
            },
            i.createElement(
              'div',
              { ...b, ref: (e) => (this._control = e), className: R.control },
              i.createElement(
                'div',
                {
                  ...this._getButtonHandlers(),
                  className: l(R.buttonWrap, {
                    'apply-common-tooltip common-tooltip-vertical': Boolean(
                      n || s,
                    ),
                  }),
                  'data-tooltip-hotkey': s,
                  'data-tooltip-delay': 1500,
                  'data-role': 'button',
                  title: n,
                },
                i.createElement(I.ToolButton, {
                  activeClass: e,
                  className: t,
                  icon: o,
                  isActive: h,
                  isGrayed: d,
                  isTransparent: !m,
                }),
              ),
              !d &&
                !c.mobiletouch &&
                i.createElement(
                  'div',
                  {
                    className: l(
                      R.arrow,
                      a && 'apply-common-tooltip common-tooltip-vertical',
                    ),
                    title: a,
                    onClick: this._handleClickArrow,
                    'data-role': 'menu-handle',
                  },
                  i.createElement(y.Icon, { className: R.arrowIcon, icon: U }),
                ),
            ),
            !d &&
              (p
                ? g &&
                  i.createElement(
                    x.Drawer,
                    { onClose: this._handleClose, position: 'Bottom' },
                    r,
                  )
                : i.createElement(
                    V.PopupMenu,
                    {
                      doNotCloseOn: this,
                      isOpened: g,
                      onClose: this._handleClose,
                      position: this._getDropdownPosition,
                    },
                    r,
                  )),
          );
        }
        _getButtonHandlers() {
          const { isGrayed: e, checkable: t } = this.props;
          return e
            ? {}
            : c.mobiletouch
            ? t
              ? {
                  onTouchStart: this._handlePressStart,
                  onTouchEnd: this._handleTouchPressEnd,
                  onTouchMove: this._cancelAllTimeouts,
                }
              : { onClick: this._handleTouchStart }
            : {
                onMouseDown: this._handlePressStart,
                onMouseUp: this._handlePressEnd,
              };
        }
      }
      var G = o(10869),
        H = o(96982);
      const j = { icon: (0, a.t)('Icon'), dropdownTooltip: (0, a.t)('Icons') };
      class q extends i.Component {
        constructor(e) {
          super(e),
            (this._renderItem = (e, t) => {
              const { isSmallTablet: o } = this.props,
                n = r()(
                  H.item,
                  o && H.smallTablet,
                  t &&
                    o &&
                    this.state.isActive &&
                    e === this.state.current &&
                    H.active,
                );
              return i.createElement(
                'div',
                {
                  className: n,
                  key: e,
                  onClick: () => {
                    this._handleSelect(e), (0, B.globalCloseMenu)();
                  },
                },
                String.fromCharCode(e),
              );
            }),
            (this._onChangeDrawingState = () => {
              this.setState({ isActive: this._isActive() });
            }),
            (this._handleSelect = (e) => {
              (0, W.saveDefaults)('linetoolicon', {
                ...(0, W.defaults)('linetoolicon'),
                icon: e,
              }),
                u.iconTool.setValue(e),
                u.tool.setValue('LineToolIcon');
              let { recents: t } = this.state;
              const o = t.indexOf(e);
              -1 !== o && t.splice(o, 1),
                (t = [e, ...t.slice(0, 9)]),
                (0, h.setJSON)('linetoolicon.recenticons', t),
                this.setState({ current: e, recents: t });
            }),
            (this._handleClick = () => {
              const { current: e } = this.state;
              this._handleSelect(e || F[0]), this._trackClick();
            }),
            (this._handleArrowClick = () => {
              this._trackClick('menu');
            }),
            (this.state = {
              current: (0, W.defaults)('linetoolicon').icon,
              recents: (0, h.getJSON)('linetoolicon.recenticons') || [],
            });
        }
        componentDidMount() {
          u.tool.subscribe(this._onChangeDrawingState),
            h.onSync.subscribe(this, this._onSyncSettings);
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChangeDrawingState),
            h.onSync.unsubscribe(this, this._onSyncSettings);
        }
        render() {
          const { isGrayed: e, toolName: t, isSmallTablet: o } = this.props,
            { current: n, isActive: s, recents: l } = this.state,
            c = (0, O.filterDataProps)(this.props),
            h = r()(H.wrap, o && H.smallTablet);
          return i.createElement(
            z,
            {
              buttonClass: H.button,
              buttonIcon: i.createElement(
                'div',
                { className: H.buttonIcon },
                String.fromCharCode(n || F[0]),
              ),
              buttonTitle: j.icon,
              dropdownTooltip: j.dropdownTooltip,
              isActive: s,
              isGrayed: e,
              isSmallTablet: o,
              onClickButton: this._handleClick,
              onClickWhenGrayed: () =>
                (0, p.emit)('onGrayedObjectClicked', {
                  type: 'drawing',
                  name: _.lineToolsInfo[t].localizedName,
                }),
              onArrowClick: this._handleArrowClick,
              ...c,
            },
            l &&
              i.createElement(
                i.Fragment,
                null,
                o &&
                  i.createElement(
                    'div',
                    { className: H.title },
                    (0, a.t)('Recently used'),
                  ),
                i.createElement(
                  'div',
                  { className: h },
                  l.map((e) => this._renderItem(e, !0)),
                ),
                i.createElement(G.PopupMenuSeparator, {
                  className: r()(o && H.separator),
                }),
              ),
            i.createElement(
              'div',
              { key: 'all', className: h },
              F.map((e) => this._renderItem(e)),
            ),
          );
        }
        _isActive() {
          return u.tool.value() === this.props.toolName;
        }
        _onSyncSettings() {
          this.setState({
            recents: (0, h.getJSON)('linetoolicon.recenticons'),
          });
        }
        _trackClick(e) {
          0;
        }
      }
      var K = o(11092);
      class Y extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._handleClick = () => {
              this.props.saveDefaultOnChange &&
                (0, K.saveDefaultProperties)(!0);
              const e = !this.props.property.value();
              this.props.property.setValue(e),
                this.props.saveDefaultOnChange &&
                  (0, K.saveDefaultProperties)(!1),
                this.props.onClick && this.props.onClick(e);
            }),
            (this.state = { isActive: this.props.property.value() });
        }
        componentDidMount() {
          this.props.property.subscribe(this, this._onChange);
        }
        componentWillUnmount() {
          this.props.property.unsubscribe(this, this._onChange);
        }
        render() {
          const { toolName: e } = this.props,
            { isActive: t } = this.state,
            o = _.lineToolsInfo[e];
          return i.createElement(I.ToolButton, {
            icon: t && o.iconActive ? o.iconActive : o.icon,
            isActive: t,
            onClick: this._handleClick,
            title: o.localizedName,
            buttonHotKey: o.hotKey,
            'data-name': e,
          });
        }
        _onChange(e) {
          this.setState({ isActive: e.value() });
        }
      }
      class J extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._handleClick = () => {
              var e, t;
              u.tool.setValue(this.props.toolName),
                null === (t = (e = this.props).onClick) ||
                  void 0 === t ||
                  t.call(e);
            }),
            (this._onChange = () => {
              this.setState({
                isActive: u.tool.value() === this.props.toolName,
              });
            }),
            (this.state = { isActive: u.tool.value() === this.props.toolName });
        }
        componentDidMount() {
          u.tool.subscribe(this._onChange);
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChange);
        }
        render() {
          const { toolName: e } = this.props,
            { isActive: t } = this.state,
            o = _.lineToolsInfo[e];
          return i.createElement(I.ToolButton, {
            icon: _.lineToolsInfo[e].icon,
            isActive: t,
            isTransparent: !0,
            onClick: this._handleClick,
            title: o.localizedName,
            buttonHotKey: o.hotKey,
            'data-name': e,
          });
        }
      }
      class $ extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._boundUndoModel = null),
            (this._handleClick = () => {
              const e = this._activeChartWidget();
              e.hasModel() && e.model().zoomFromViewport();
            }),
            (this._syncUnzoomButton = () => {
              const e = this._activeChartWidget();
              let t = !1;
              if (e.hasModel()) {
                const o = e.model();
                this._boundUndoModel !== o &&
                  (this._boundUndoModel &&
                    this._boundUndoModel
                      .zoomStack()
                      .onChange()
                      .unsubscribe(null, this._syncUnzoomButton),
                  o
                    .zoomStack()
                    .onChange()
                    .subscribe(null, this._syncUnzoomButton),
                  (this._boundUndoModel = o)),
                  (t = !o.zoomStack().isEmpty());
              } else e.withModel(null, this._syncUnzoomButton);
              this.setState({ isVisible: t });
            }),
            (this.state = { isVisible: !1 });
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(
            this._syncUnzoomButton,
            { callWithLast: !0 },
          );
        }
        componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
            this._syncUnzoomButton,
          );
        }
        render() {
          return this.state.isVisible
            ? i.createElement(P, {
                action: this._handleClick,
                isTransparent: !0,
                toolName: 'zoom-out',
              })
            : i.createElement('div', null);
        }
        _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value();
        }
      }
      var Z = o(2266),
        Q = o(65043),
        X = o(95860),
        ee = o(82879);
      class te extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._onChangeDrawingState = () => {
              const e = this._getActiveToolIndex();
              this.setState({
                current: -1 !== e ? e : this.state.current,
                isActive: -1 !== e,
              });
            }),
            (this._handleClickButton = () => {
              if ((this._trackClick(), v.CheckMobile.any())) return;
              const e = this._getCurrentToolName();
              this._selectTool(e);
            }),
            (this._handleClickItem = (e) => {
              this._selectTool(e);
            }),
            (this._handleGrayedClick = (e) => {
              (0, p.emit)('onGrayedObjectClicked', {
                type: 'drawing',
                name: _.lineToolsInfo[e].localizedName,
              });
            }),
            (this._handleClickFavorite = (e) => {
              this.state.favState && this.state.favState[e]
                ? Z.LinetoolsFavoritesStore.removeFavorite(e)
                : Z.LinetoolsFavoritesStore.addFavorite(e);
            }),
            (this._onAddFavorite = (e) => {
              this.setState({ favState: { ...this.state.favState, [e]: !0 } });
            }),
            (this._onRemoveFavorite = (e) => {
              this.setState({ favState: { ...this.state.favState, [e]: !1 } });
            }),
            (this._onSyncFavorites = () => {
              this.setState({ favState: this._composeFavState() });
            }),
            (this._handleArrowClick = () => {
              this._trackClick('menu');
            }),
            (this._trackClick = (e) => {
              const { trackLabel: t } = this.props;
            });
          const t = this._getActiveToolIndex();
          this.state = {
            current: -1 === t ? this._firstNonGrayedTool() : t,
            favState: this._composeFavState(),
            isActive: -1 !== t,
          };
        }
        componentDidMount() {
          u.tool.subscribe(this._onChangeDrawingState),
            Z.LinetoolsFavoritesStore.favoriteAdded.subscribe(
              null,
              this._onAddFavorite,
            ),
            Z.LinetoolsFavoritesStore.favoriteRemoved.subscribe(
              null,
              this._onRemoveFavorite,
            ),
            Z.LinetoolsFavoritesStore.favoritesSynced.subscribe(
              null,
              this._onSyncFavorites,
            );
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChangeDrawingState),
            Z.LinetoolsFavoritesStore.favoriteAdded.unsubscribe(
              null,
              this._onAddFavorite,
            ),
            Z.LinetoolsFavoritesStore.favoriteRemoved.unsubscribe(
              null,
              this._onRemoveFavorite,
            ),
            Z.LinetoolsFavoritesStore.favoritesSynced.unsubscribe(
              null,
              this._onSyncFavorites,
            );
        }
        componentDidUpdate(e, t) {
          e.lineTools !== this.props.lineTools &&
            this.setState({ favState: this._composeFavState() });
        }
        render() {
          const {
              favoriting: e,
              grayedTools: t,
              lineTools: o,
              dropdownTooltip: n,
              isSmallTablet: s,
            } = this.props,
            { current: a, favState: l, isActive: r } = this.state,
            c = this._getCurrentToolName(),
            h = _.lineToolsInfo[c],
            d = this._showShortcuts(),
            u = (0, O.filterDataProps)(this.props);
          return i.createElement(
            'span',
            null,
            i.createElement(
              z,
              {
                buttonIcon: h.icon,
                buttonTitle: h.localizedName,
                buttonHotKey: h.hotKey,
                dropdownTooltip: n,
                isActive: r,
                onClickButton: this._handleClickButton,
                onArrowClick: this._handleArrowClick,
                isSmallTablet: s,
                ...u,
              },
              o.map((o, n) => {
                const c = o.name,
                  h = _.lineToolsInfo[c],
                  u = t[c];
                return i.createElement(X.PopupMenuItem, {
                  key: c,
                  'data-name': o.name,
                  theme: s ? ee.multilineLabelWithIconAndToolboxTheme : void 0,
                  dontClosePopup: u,
                  forceShowShortcuts: d,
                  shortcut:
                    !s && o.hotkeyHash
                      ? (0, w.humanReadableHash)(o.hotkeyHash)
                      : void 0,
                  icon: h.icon,
                  isActive: r && a === n,
                  appearAsDisabled: u,
                  label: h.localizedName,
                  onClick: u ? this._handleGrayedClick : this._handleClickItem,
                  onClickArg: c,
                  showToolboxOnHover: !l[c],
                  toolbox:
                    e && !u
                      ? i.createElement(Q.FavoriteButton, {
                          isActive: r && a === n,
                          isFilled: l[c],
                          onClick: () => this._handleClickFavorite(c),
                        })
                      : void 0,
                });
              }),
            ),
          );
        }
        _getCurrentToolName() {
          const { current: e } = this.state,
            { lineTools: t } = this.props;
          return t[e || 0].name;
        }
        _firstNonGrayedTool() {
          const { grayedTools: e, lineTools: t } = this.props;
          return t.findIndex((t) => !e[t.name]);
        }
        _getActiveToolIndex() {
          return this.props.lineTools.findIndex(
            (e) => e.name === u.tool.value(),
          );
        }
        _showShortcuts() {
          return this.props.lineTools.some((e) => 'shortcut' in e);
        }
        _selectTool(e) {
          u.tool.setValue(e);
        }
        _composeFavState() {
          const e = {};
          return (
            this.props.lineTools.forEach((t) => {
              e[t.name] = Z.LinetoolsFavoritesStore.isFavorite(t.name);
            }),
            e
          );
        }
      }
      var oe = o(87438),
        ie = o(4598),
        ne = o(65688);
      const se = (0, ie.mergeThemes)(X.DEFAULT_POPUP_MENU_ITEM_THEME, ne),
        ae = {
          all: (0, a.t)('Remove Drawings & Indicators'),
          drawings: (0, a.t)('Remove Drawings'),
          studies: (0, a.t)('Remove Indicators'),
        };
      class le extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleRemoveToolClick = () => {
              c.mobiletouch || this._handleRemoveDrawings(), ce();
            }),
            (this._handleRemoveDrawings = () => {
              re('remove drawing'),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllDrawingTools();
            }),
            (this._handleRemoveStudies = () => {
              re('remove indicator'),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllStudies();
            }),
            (this._handleRemoveAll = () => {
              re('remove all'),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllStudiesDrawingTools();
            });
        }
        render() {
          const e = this.props.isSmallTablet ? se : void 0;
          return i.createElement(
            z,
            {
              buttonIcon: _.lineToolsInfo[this.props.toolName].icon,
              buttonTitle: ae.drawings,
              onClickButton: this._handleRemoveToolClick,
              isSmallTablet: this.props.isSmallTablet,
              'data-name': this.props.toolName,
              onArrowClick: this._handleArrowClick,
            },
            i.createElement(X.PopupMenuItem, {
              'data-name': 'remove-drawing-tools',
              label: ae.drawings,
              onClick: this._handleRemoveDrawings,
              theme: e,
            }),
            i.createElement(X.PopupMenuItem, {
              'data-name': 'remove-studies',
              label: ae.studies,
              onClick: this._handleRemoveStudies,
              theme: e,
            }),
            i.createElement(X.PopupMenuItem, {
              'data-name': 'remove-all',
              label: ae.all,
              onClick: this._handleRemoveAll,
              theme: e,
            }),
          );
        }
        _handleArrowClick() {
          ce('menu');
        }
      }
      function re(e) {
        (0, oe.trackEvent)('GUI', 'Chart Left Toolbar', e);
      }
      function ce(e) {
        0;
      }
      var he = o(84021),
        de = o(35036),
        ue = o(49088);
      const me = i.createContext({ hideMode: 'drawings', isActive: !1 });
      function pe(e) {
        const {
            hideMode: t,
            option: { label: o, dataName: n, getBoxedValue: s },
            isSmallTablet: a,
            onClick: l,
          } = e,
          { hideMode: r, isActive: c } = (0, i.useContext)(me),
          h = null == s ? void 0 : s();
        return 'all' === t || h
          ? i.createElement(X.PopupMenuItem, {
              label: o,
              isActive: r === t && c,
              onClick: function () {
                l(t, (0, de.toggleHideMode)(t));
              },
              'data-name': n,
              theme: a ? se : void 0,
            })
          : i.createElement(i.Fragment, null);
      }
      const ge = {
        drawings: {
          active: he.drawingToolsIcons.hideAllDrawingToolsActive,
          inactive: he.drawingToolsIcons.hideAllDrawingTools,
        },
        indicators: {
          active: he.drawingToolsIcons.hideAllIndicatorsActive,
          inactive: he.drawingToolsIcons.hideAllIndicators,
        },
        positions: {
          active: he.drawingToolsIcons.hideAllPositionsToolsActive,
          inactive: he.drawingToolsIcons.hideAllPositionsTools,
        },
        all: {
          active: he.drawingToolsIcons.hideAllDrawingsActive,
          inactive: he.drawingToolsIcons.hideAllDrawings,
        },
      };
      function be(e) {
        const { isSmallTablet: t } = e,
          [{ isActive: o, hideMode: n }, a] = (0, i.useState)(() => ({
            isActive: !1,
            hideMode: (0, de.getSavedHideMode)(),
          }));
        (0, i.useEffect)(
          () => (
            ue.hideStateChange.subscribe(null, a),
            () => {
              ue.hideStateChange.unsubscribe(null, a);
            }
          ),
          [],
        );
        const l = _.lineToolsInfo.hideAllDrawings,
          {
            trackLabel: r,
            tooltip: c,
            dataName: h,
          } = (0, s.ensureDefined)((0, de.getHideOptions)().get(n)),
          d = ge[n][o ? 'active' : 'inactive'],
          u = o ? c.active : c.inactive;
        return i.createElement(
          z,
          {
            buttonIcon: d,
            buttonTitle: u,
            buttonHotKey: l.hotKey,
            onClickButton: function () {
              (0, de.toggleHideMode)(n), ve(r, !o), _e(o ? 'on' : 'off');
            },
            isSmallTablet: t,
            isActive: o,
            checkable: !0,
            'data-name': 'hide-all',
            'data-type': h,
            onArrowClick: function () {
              _e('menu');
            },
          },
          i.createElement(
            me.Provider,
            { value: { isActive: o, hideMode: n } },
            Array.from((0, de.getHideOptions)()).map(([e, o]) =>
              i.createElement(pe, {
                key: e,
                hideMode: e,
                option: o,
                isSmallTablet: t,
                onClick: m,
              }),
            ),
          ),
        );
        function m(e, t) {
          ve(
            (0, s.ensureDefined)((0, de.getHideOptions)().get(e)).trackLabel,
            t,
          );
        }
      }
      function ve(e, t) {
        (0, oe.trackEvent)(
          'GUI',
          'Chart Left Toolbar',
          `${e} ${t ? 'on' : 'off'}`,
        );
      }
      function _e(e) {
        0;
      }
      var Te = o(65109),
        Ce = o(42454);
      const we = (0, a.t)('Show Favorite Drawing Tools Toolbar');
      class ke extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._instance = null),
            (this._promise = null),
            (this._bindedForceUpdate = () => this.forceUpdate()),
            (this._handleClick = () => {
              null !== this._instance &&
                (this._instance.isVisible()
                  ? (this._instance.hide(), this._trackClick(!1))
                  : (this._instance.show(), this._trackClick(!0)));
            });
        }
        componentDidMount() {
          const e = (this._promise = (0, s.ensureNotNull)(
            (0, Te.getFavoriteDrawingToolbarPromise)(),
          ));
          e.then((t) => {
            this._promise === e &&
              ((this._instance = t),
              this._instance.canBeShown().subscribe(this._bindedForceUpdate),
              this._instance.visibility().subscribe(this._bindedForceUpdate),
              this.forceUpdate());
          });
        }
        componentWillUnmount() {
          (this._promise = null),
            null !== this._instance &&
              (this._instance.canBeShown().unsubscribe(this._bindedForceUpdate),
              this._instance.visibility().unsubscribe(this._bindedForceUpdate),
              (this._instance = null));
        }
        render() {
          return null !== this._instance && this._instance.canBeShown().value()
            ? i.createElement(I.ToolButton, {
                id: this.props.id,
                icon: Ce,
                isActive: this._instance.isVisible(),
                onClick: this._handleClick,
                title: we,
              })
            : null;
        }
        _trackClick(e) {
          0;
        }
      }
      var Se,
        fe = o(38536);
      !(function (e) {
        (e.Screenshot = 'drawing-toolbar-screenshot'),
          (e.FavoriteDrawings = 'drawing-toolbar-favorite-drawings'),
          (e.ObjectTree = 'drawing-toolbar-object-tree');
      })(Se || (Se = {}));
      var ye = o(11086),
        Le = o(39197),
        Me = o(31911),
        De = o(94884),
        Ee = o(14750);
      const Ae = Ee,
        Ne = 'http://www.w3.org/2000/svg';
      function Be(e) {
        const { direction: t, theme: o = Ee } = e;
        return i.createElement(
          'svg',
          {
            xmlns: Ne,
            width: '9',
            height: '27',
            viewBox: '0 0 9 27',
            className: l(o.container, 'right' === t ? o.mirror : null),
            onContextMenu: Le.preventDefault,
          },
          i.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            i.createElement('path', {
              className: o.background,
              d: 'M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z',
            }),
            i.createElement('path', {
              className: o.arrow,
              d: 'M5.5 10l-2 3.5 2 3.5',
            }),
          ),
        );
      }
      var Ie = o(34482);
      const Pe = (0, ie.mergeThemes)(Ae, Ie),
        We = {
          hide: (0, a.t)('Hide Drawings Toolbar'),
          show: (0, a.t)('Show Drawings Toolbar'),
        };
      class Fe extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._toggleVisibility = () => {
              S.isDrawingToolbarVisible.setValue(
                !S.isDrawingToolbarVisible.value(),
              );
            });
        }
        render() {
          const { toolbarVisible: e, 'data-name': t } = this.props;
          return i.createElement(
            'div',
            {
              className: l(
                Pe.toggleButton,
                'apply-common-tooltip common-tooltip-vertical',
                !e && Pe.collapsed,
              ),
              onClick: this._toggleVisibility,
              title: e ? We.hide : We.show,
              'data-name': t,
              'data-value': e ? 'visible' : 'collapsed',
            },
            i.createElement(Be, {
              direction: e ? 'left' : 'right',
              theme: e ? void 0 : Pe,
            }),
          );
        }
      }
      var Ve = o(94004),
        Oe = o(72923),
        xe = o(68521);
      const Ue = { chartWidgetCollection: o(45697).any.isRequired };
      var Re = o(53178),
        ze = o(24565);
      const Ge = {
          weakMagnet: (0, a.t)('Weak Magnet'),
          strongMagnet: (0, a.t)('Strong Magnet'),
        },
        He = (0, v.onWidget)(),
        je = new (b())(),
        qe = oe.trackEvent.bind(null, 'GUI', 'Chart Left Toolbar'),
        Ke = (e, t) => qe(`${e} ${t ? 'on' : 'off'}`);
      function Ye() {
        const e = !u.properties().childs().magnet.value();
        Ke('magnet mode', e),
          Xe('magnet mode', e ? 'on' : 'off'),
          (0, m.setIsMagnetEnabled)(e);
      }
      function Je() {
        (0, oe.trackEvent)('GUI', 'Magnet mode', 'Weak'),
          (0, m.setMagnetMode)(fe.MagnetMode.WeakMagnet);
      }
      function $e() {
        (0, oe.trackEvent)('GUI', 'Magnet mode', 'Strong'),
          (0, m.setMagnetMode)(fe.MagnetMode.StrongMagnet);
      }
      function Ze() {
        Xe('magnet mode', 'menu');
      }
      class Qe extends i.PureComponent {
        constructor(e) {
          var t;
          super(e),
            (this._grayedTools = {}),
            (this._handleMeasureClick = () => {
              Xe('measure');
            }),
            (this._handleZoomInClick = () => {
              Xe('zoom in');
            }),
            (this._handleDrawingClick = (e) => {
              Ke('drawing mode', e), Xe('drawing mode', e ? 'on' : 'off');
            }),
            (this._handleLockClick = (e) => {
              Ke('lock all drawing', e), Xe('lock', e ? 'on' : 'off');
            }),
            (this._handleSyncClick = (e) => {
              Ke('sync', e), Xe('sync', e ? 'on' : 'off');
            }),
            (this._handleObjectsTreeClick = () => {
              this._activeChartWidget().showObjectsTreeDialog(),
                Xe('object tree');
            }),
            (this._handleMouseOver = (e) => {
              (0, ye.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !0 });
            }),
            (this._handleMouseOut = (e) => {
              (0, ye.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !1 });
            }),
            (this._handleChangeVisibility = (e) => {
              this.setState({ isVisible: e });
            }),
            (this._handleEsc = () => {
              u.resetToCursor(!0);
            }),
            (this._updateMagnetEnabled = () => {
              const e = { magnet: (0, m.magnetEnabled)().value() };
              this.setState(e);
            }),
            (this._updateMagnetMode = () => {
              const e = { magnetMode: (0, m.magnetMode)().value() };
              this.setState(e);
            }),
            (this._handleWidgetbarSettled = (e) => {
              var t;
              this.setState({
                isWidgetbarVisible: Boolean(
                  null === (t = window.widgetbar) || void 0 === t
                    ? void 0
                    : t.visible().value(),
                ),
                widgetbarSettled: e,
              });
            }),
            (this._handleWidgetbarVisible = (e) => {
              this.setState({ isWidgetbarVisible: e });
            }),
            u.init(),
            (this._toolsFilter = new T(this.props.drawingsAccess)),
            (this._filteredLineTools = k
              .map((e) => ({
                id: e.id,
                title: e.title,
                items: e.items.filter((e) =>
                  this._toolsFilter.isToolEnabled(
                    _.lineToolsInfo[e.name].localizedName,
                  ),
                ),
                trackLabel: e.trackLabel,
              }))
              .filter((e) => 0 !== e.items.length)),
            this._filteredLineTools.forEach((e) =>
              e.items.forEach((e) => {
                this._grayedTools[e.name] = this._toolsFilter.isToolGrayed(
                  _.lineToolsInfo[e.name].localizedName,
                );
              }),
            ),
            (this.state = {
              isHovered: !1,
              isVisible: S.isDrawingToolbarVisible.value(),
              isWidgetbarVisible: Boolean(
                null === (t = window.widgetbar) || void 0 === t
                  ? void 0
                  : t.visible().value(),
              ),
              widgetbarSettled: void 0 !== window.widgetbar,
              magnet: u.properties().childs().magnet.value(),
              magnetMode: u.properties().childs().magnetMode.value(),
            }),
            (this._features = {
              favoriting: !He && d.enabled('items_favoriting'),
              multicharts: d.enabled('support_multicharts'),
              tools: !He || d.enabled('charting_library_base'),
            }),
            (this._registry = {
              chartWidgetCollection: this.props.chartWidgetCollection,
            }),
            this._negotiateResizer();
        }
        componentDidMount() {
          var e;
          S.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility),
            B.globalCloseDelegate.subscribe(this, this._handleGlobalClose),
            (0, m.magnetEnabled)().subscribe(this._updateMagnetEnabled),
            (0, m.magnetMode)().subscribe(this._updateMagnetMode),
            (this._tool = u.tool.spawn()),
            this._tool.subscribe(this._updateHotkeys.bind(this)),
            this._initHotkeys(),
            this.props.widgetbarSettled &&
              (this.props.widgetbarSettled.subscribe(
                this,
                this._handleWidgetbarSettled,
              ),
              v.CheckMobile.any() &&
                (null === (e = window.widgetbar) ||
                  void 0 === e ||
                  e.visible().subscribe(this._handleWidgetbarVisible)));
        }
        componentWillUnmount() {
          var e;
          null === (e = window.widgetbar) ||
            void 0 === e ||
            e.visible().unsubscribe(this._handleWidgetbarVisible),
            S.isDrawingToolbarVisible.unsubscribe(this._handleChangeVisibility),
            B.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose),
            (0, m.magnetEnabled)().unsubscribe(this._updateMagnetEnabled),
            (0, m.magnetMode)().unsubscribe(this._updateMagnetMode),
            this._tool.destroy(),
            this._hotkeys.destroy();
        }
        componentDidUpdate(e, t) {
          var o;
          const { isVisible: i, widgetbarSettled: n } = this.state;
          i !== t.isVisible &&
            (p.emit('toggle_sidebar', !i),
            h.setValue('ChartDrawingToolbarWidget.visible', i),
            this._negotiateResizer()),
            t.widgetbarSettled !== n &&
              n &&
              v.CheckMobile.any() &&
              (null === (o = window.widgetbar) ||
                void 0 === o ||
                o.visible().subscribe(this._handleWidgetbarVisible));
        }
        render() {
          const {
              bgColor: e,
              chartWidgetCollection: t,
              readOnly: o,
            } = this.props,
            {
              isHovered: n,
              isVisible: s,
              magnet: a,
              magnetMode: r,
            } = this.state,
            h = { backgroundColor: e && '#' + e };
          let m;
          m = i.createElement(Fe, {
            toolbarVisible: s,
            'data-name': 'toolbar-drawing-toggle-button',
          });
          const p = () =>
            !!this._features.tools && !!d.enabled('show_object_tree');
          return i.createElement(
            Re.RegistryProvider,
            { validation: Ue, value: this._registry },
            i.createElement(
              De.CloseDelegateContext.Provider,
              { value: je },
              i.createElement(
                Ve.DrawerManager,
                null,
                i.createElement(
                  xe.MatchMedia,
                  { rule: Oe.DialogBreakpoints.TabletSmall },
                  (e) =>
                    i.createElement(
                      'div',
                      {
                        id: 'drawing-toolbar',
                        className: l(ze.drawingToolbar, { [ze.isHidden]: !s }),
                        style: h,
                        onClick: this.props.onClick,
                        onContextMenu: Le.preventDefaultForContextMenu,
                      },
                      i.createElement(
                        A,
                        {
                          onScroll: this._handleGlobalClose,
                          isVisibleFade: c.mobiletouch,
                          isVisibleButtons: !c.mobiletouch && n,
                          isVisibleScrollbar: !1,
                          onMouseOver: this._handleMouseOver,
                          onMouseOut: this._handleMouseOut,
                        },
                        i.createElement(
                          'div',
                          {
                            className: ze.inner,
                          },
                          !o &&
                            i.createElement(
                              'div',
                              { className: ze.group, style: h },
                              this._filteredLineTools.map((o, n) =>
                                i.createElement(te, {
                                  'data-name': o.id,
                                  chartWidgetCollection: t,
                                  favoriting: this._features.favoriting,
                                  grayedTools: this._grayedTools,
                                  key: n,
                                  dropdownTooltip: o.title,
                                  lineTools: o.items,
                                  isSmallTablet: e,
                                  trackLabel: o.trackLabel,
                                }),
                              ),
                              this._toolsFilter.isToolEnabled('Font Icons') &&
                                i.createElement(q, {
                                  'data-name': 'linetool-group-font-icons',
                                  isGrayed: this._grayedTools['Font Icons'],
                                  toolName: 'LineToolIcon',
                                  isSmallTablet: e,
                                }),
                            ),
                          !o &&
                            i.createElement(
                              'div',
                              { className: ze.group, style: h },
                              i.createElement(J, {
                                toolName: 'measure',
                                onClick: this._handleMeasureClick,
                              }),
                              i.createElement(J, {
                                toolName: 'zoom',
                                onClick: this._handleZoomInClick,
                              }),
                              i.createElement($, { chartWidgetCollection: t }),
                            ),
                          !o &&
                            i.createElement(
                              'div',
                              { className: ze.group, style: h },
                              i.createElement(
                                z,
                                {
                                  'data-name': 'magnet-button',
                                  buttonIcon:
                                    r === fe.MagnetMode.StrongMagnet
                                      ? he.drawingToolsIcons.strongMagnet
                                      : he.drawingToolsIcons.magnet,
                                  buttonTitle:
                                    _.lineToolsInfo.magnet.localizedName,
                                  isActive: a,
                                  onClickButton: Ye,
                                  buttonHotKey: _.lineToolsInfo.magnet.hotKey,
                                  checkable: !0,
                                  isSmallTablet: e,
                                  onArrowClick: Ze,
                                },
                                i.createElement(X.PopupMenuItem, {
                                  key: 'weakMagnet',
                                  className: e ? ze.popupMenuItem : void 0,
                                  'data-name': 'weakMagnet',
                                  icon: he.drawingToolsIcons.magnet,
                                  isActive:
                                    a && r !== fe.MagnetMode.StrongMagnet,
                                  label: Ge.weakMagnet,
                                  onClick: Je,
                                }),
                                i.createElement(X.PopupMenuItem, {
                                  key: 'strongMagnet',
                                  className: e ? ze.popupMenuItem : void 0,
                                  'data-name': 'strongMagnet',
                                  icon: he.drawingToolsIcons.strongMagnet,
                                  isActive:
                                    a && r === fe.MagnetMode.StrongMagnet,
                                  label: Ge.strongMagnet,
                                  onClick: $e,
                                }),
                              ),
                              this._features.tools &&
                                i.createElement(Y, {
                                  property: u.properties().childs()
                                    .stayInDrawingMode,
                                  saveDefaultOnChange: !0,
                                  toolName: 'drawginmode',
                                  onClick: this._handleDrawingClick,
                                }),
                              this._features.tools &&
                                i.createElement(Y, {
                                  property: u.lockDrawings(),
                                  toolName: 'lockAllDrawings',
                                  onClick: this._handleLockClick,
                                }),
                              this._features.tools &&
                                i.createElement(be, { isSmallTablet: e }),
                              !1,
                            ),
                          !o &&
                            this._features.tools &&
                            i.createElement(
                              'div',
                              { className: ze.group, style: h },
                              i.createElement(le, {
                                chartWidgetCollection: t,
                                isSmallTablet: e,
                                toolName: 'removeAllDrawingTools',
                              }),
                            ),
                          i.createElement('div', {
                            className: ze.fill,
                            style: h,
                          }),
                          !o &&
                            (this._features.tools || !1) &&
                            i.createElement(
                              'div',
                              {
                                className: l(ze.group, ze.lastGroup),
                                style: h,
                              },
                              !1,
                              this._features.tools &&
                                this._features.favoriting &&
                                i.createElement(ke, {
                                  id: Se.FavoriteDrawings,
                                }),
                              p() &&
                                i.createElement(P, {
                                  id: Se.ObjectTree,
                                  action: this._handleObjectsTreeClick,
                                  toolName: 'showObjectsTree',
                                }),
                            ),
                        ),
                      ),
                      m,
                    ),
                ),
              ),
            ),
          );
        }
        _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value();
        }
        _negotiateResizer() {
          const e = Me.TOOLBAR_WIDTH_COLLAPSED;
          this.props.resizerBridge.negotiateWidth(
            this.state.isVisible ? Me.TOOLBAR_WIDTH_EXPANDED : e,
          );
        }
        _handleGlobalClose() {
          je.fire();
        }
        _updateHotkeys() {
          this._hotkeys.promote();
        }
        _initHotkeys() {
          (this._hotkeys = N.createGroup({ desc: 'Drawing Toolbar' })),
            this._hotkeys.add({
              desc: 'Reset',
              hotkey: 27,
              handler: () => this._handleEsc(),
              isDisabled: () => u.toolIsCursor(u.tool.value()),
            });
        }
      }
      function Xe(e, t) {
        0;
      }
      class et {
        constructor(e, t) {
          (this._component = null),
            (this._handleRef = (e) => {
              this._component = e;
            }),
            (this._container = e),
            n.render(
              i.createElement(Qe, { ...t, ref: this._handleRef }),
              this._container,
            );
        }
        destroy() {
          n.unmountComponentAtNode(this._container);
        }
        getComponent() {
          return (0, s.ensureNotNull)(this._component);
        }
      }
    },
    94004: (e, t, o) => {
      'use strict';
      o.d(t, { DrawerManager: () => n, DrawerContext: () => s });
      var i = o(67294);
      class n extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._addDrawer = () => {
              const e = this.state.currentDrawer + 1;
              return this.setState({ currentDrawer: e }), e;
            }),
            (this._removeDrawer = () => {
              const e = this.state.currentDrawer - 1;
              return this.setState({ currentDrawer: e }), e;
            }),
            (this.state = { currentDrawer: 0 });
        }
        render() {
          return i.createElement(
            s.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.currentDrawer,
              },
            },
            this.props.children,
          );
        }
      }
      const s = i.createContext(null);
    },
    57374: (e, t, o) => {
      'use strict';
      o.d(t, { Drawer: () => m });
      var i = o(67294),
        n = o(16282),
        s = o(94184),
        a = o(67891),
        l = o(75761),
        r = o(4735),
        c = o(94004),
        h = o(43367),
        d = o(94884),
        u = o(64526);
      function m(e) {
        const {
            position: t = 'Bottom',
            onClose: o,
            children: m,
            className: p,
            theme: g = u,
          } = e,
          b = (0, n.ensureNotNull)((0, i.useContext)(c.DrawerContext)),
          [v, _] = (0, i.useState)(0),
          T = (0, i.useRef)(null),
          C = (0, i.useContext)(d.CloseDelegateContext);
        return (
          (0, i.useEffect)(() => {
            const e = (0, n.ensureNotNull)(T.current);
            return (
              e.focus({ preventScroll: !0 }),
              C.subscribe(b, o),
              (0, l.setFixedBodyState)(!0),
              h.CheckMobile.iOS() && (0, a.disableBodyScroll)(e),
              _(b.addDrawer()),
              () => {
                C.unsubscribe(b, o);
                const t = b.removeDrawer();
                h.CheckMobile.iOS() && (0, a.enableBodyScroll)(e),
                  0 === t && (0, l.setFixedBodyState)(!1);
              }
            );
          }, []),
          i.createElement(
            r.Portal,
            null,
            i.createElement(
              'div',
              { className: s(u.wrap, u['position' + t]) },
              v === b.currentDrawer &&
                i.createElement('div', { className: u.backdrop, onClick: o }),
              i.createElement(
                'div',
                {
                  className: s(u.drawer, g.drawer, u['position' + t], p),
                  ref: T,
                  tabIndex: -1,
                  'data-name': e['data-name'],
                },
                m,
              ),
            ),
          )
        );
      }
    },
    38508: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
    },
    42454: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>';
    },
  },
]);

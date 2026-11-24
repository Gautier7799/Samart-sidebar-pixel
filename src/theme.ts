import { StyleSheet } from "react-native";
import type { DynamicPalette } from "../modules/sidebar";

export function makeColors(scheme: 'light' | 'dark', palette: DynamicPalette = {}) {
  const dark = scheme === "dark";
  return {
    bg: dark ? (palette.darkBackground ?? "#141218") : (palette.lightBackground ?? "#FFFBFE"),
    surfaceContainer: dark ? (palette.darkSurface ?? "#211F26") : (palette.lightSurface ?? "#F3EFF7"),
    surfaceContainerHigh: dark ? (palette.darkSurfaceHigh ?? "#2B2930") : (palette.lightSurfaceHigh ?? "#EDE8F2"),
    card: dark ? (palette.darkSurface ?? "#211F26") : (palette.lightSurface ?? "#F3EFF7"),
    primary: dark ? (palette.darkPrimary ?? "#D0BCFF") : (palette.lightPrimary ?? "#6750A4"),
    onPrimary: dark ? (palette.darkOnPrimary ?? "#381E72") : (palette.lightOnPrimary ?? "#FFFFFF"),
    primaryContainer: dark ? (palette.darkPrimaryContainer ?? "#4F378B") : (palette.lightPrimaryContainer ?? "#EADDFF"),
    onPrimaryContainer: dark ? (palette.darkOnPrimaryContainer ?? "#EADDFF") : (palette.lightOnPrimaryContainer ?? "#21005D"),
    secondaryContainer: dark ? (palette.darkSecondaryContainer ?? "#4A4458") : (palette.lightSecondaryContainer ?? "#E8DEF8"),
    onSecondaryContainer: dark ? (palette.darkOnSecondaryContainer ?? "#E8DEF8") : (palette.lightOnSecondaryContainer ?? "#1D192B"),
    tertiaryContainer: dark ? (palette.darkTertiaryContainer ?? "#633B48") : (palette.lightTertiaryContainer ?? "#FFD8E4"),
    onTertiaryContainer: dark ? (palette.darkOnTertiaryContainer ?? "#FFD8E4") : (palette.lightOnTertiaryContainer ?? "#31111D"),
    text: dark ? (palette.darkText ?? "#E6E1E5") : (palette.lightText ?? "#1C1B1F"),
    subtext: dark ? (palette.darkSubtext ?? "#CAC4D0") : (palette.lightSubtext ?? "#49454F"),
    outline: dark ? (palette.darkOutline ?? "#938F99") : (palette.lightOutline ?? "#79747E"),
    separator: dark ? (palette.darkSeparator ?? "#49454F") : (palette.lightSeparator ?? "#CAC4D0"),
    tint: dark ? (palette.darkPrimary ?? "#D0BCFF") : (palette.lightPrimary ?? "#6750A4"),
    errorContainer: dark ? (palette.darkErrorContainer ?? "#8C1D18") : (palette.lightErrorContainer ?? "#F9DEDC"),
    onErrorContainer: dark ? (palette.darkOnErrorContainer ?? "#F2B8B5") : (palette.lightOnErrorContainer ?? "#410E0B"),
  };
}

export type AppColors = ReturnType<typeof makeColors>;

export function makeStyles(colors: AppColors) {
  return StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.bg },

    serviceCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.surfaceContainerHigh,
      borderColor: colors.outline,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 28,
      paddingHorizontal: 20,
      paddingVertical: 18,
      marginHorizontal: 16,
      marginTop: 4,
      marginBottom: 8,
    },

    scroll: { flex: 1 },
    scrollContent: { padding: 16, paddingBottom: 32 },

    section: { backgroundColor: colors.surfaceContainer, borderRadius: 24, overflow: "hidden" },
    sectionTitle: {
      fontSize: 12, fontWeight: "700", color: colors.primary,
      marginHorizontal: 22, marginTop: 20, marginBottom: 8, letterSpacing: 0.8,
    },
    separator: { height: StyleSheet.hairlineWidth, backgroundColor: colors.separator, marginLeft: 72 },

    controlStrip: { paddingHorizontal: 12, paddingVertical: 12, gap: 16 },
    controlCell: { alignItems: "center", width: 64 },
    controlCellActive: { opacity: 0.8 },
    controlIconCircle: {
      width: 52, height: 52, borderRadius: 26,
      backgroundColor: colors.primaryContainer,
      alignItems: "center", justifyContent: "center",
      position: "relative",
    },
    controlIconCircleOff: { backgroundColor: colors.surfaceContainerHigh },
    controlCellLabel: {
      fontSize: 11, color: colors.text, textAlign: "center",
      marginTop: 6, lineHeight: 14,
    },
    controlGrid: {
      flexDirection: "row", flexWrap: "wrap",
      paddingHorizontal: 12, paddingVertical: 12, paddingTop: 4,
    },
    controlGridCell: { width: "25%", alignItems: "center", paddingVertical: 10 },

    row: {
      flexDirection: "row", alignItems: "center",
      paddingHorizontal: 22, paddingVertical: 18,
    },
    rowLabel: { fontSize: 16, color: colors.text },
    rowSub: { fontSize: 13, color: colors.subtext, marginTop: 2 },

    settingRow: {
      flexDirection: "row", alignItems: "center",
      paddingHorizontal: 22, paddingVertical: 16, gap: 16,
    },
    settingLabel: { fontSize: 16, color: colors.text, width: 80 },

    // M3 Segmented Button
    segmented: {
      flex: 1,
      flexDirection: "row",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.outline,
      overflow: "hidden",
    },
    segBtn: { paddingHorizontal: 20, paddingVertical: 9, flex: 1, alignItems: "center" },
    segBtnSm: { paddingHorizontal: 6, paddingVertical: 7, flex: 1, alignItems: "center" },
    segBtnActive: { backgroundColor: colors.secondaryContainer },
    segBtnText: { fontSize: 14, color: colors.outline, letterSpacing: 0.1 },
    segBtnSmText: { fontSize: 12, color: colors.outline },
    segBtnTextActive: { color: colors.onSecondaryContainer, fontWeight: "500" },

    sliderWrap: { flex: 1, flexDirection: "row", alignItems: "center", gap: 6 },
    sliderEdge: { fontSize: 12, color: colors.subtext },
    sliderTrackWrap: { flex: 1, height: 44, justifyContent: "center" },
    sliderTrackBg: {
      position: "absolute", left: 0, right: 0,
      height: 28, borderRadius: 14, backgroundColor: colors.separator,
    },
    sliderTrackFill: {
      position: "absolute", left: 0,
      height: 28, borderRadius: 14, backgroundColor: colors.primary,
    },

    permCount: {
      fontSize: 13, color: colors.subtext, marginBottom: 12,
      textAlign: "center", letterSpacing: 0.3,
    },

    // M3 Filled Button
    saveBtn: {
      margin: 16, backgroundColor: colors.primary,
      borderRadius: 20, paddingVertical: 14, alignItems: "center",
    },
    openSettingsBtn: { marginTop: 8, flexDirection: "row", justifyContent: "center" },
    saveBtnCompact: { margin: 10, paddingVertical: 12 },
    saveBtnDisabled: { opacity: 0.38 },
    saveBtnText: { color: colors.onPrimary, fontSize: 14, fontWeight: "500", letterSpacing: 0.1 },

    // M3 Tonal Button
    grantBtn: {
      backgroundColor: colors.primaryContainer,
      borderRadius: 20, paddingHorizontal: 16, paddingVertical: 9,
    },
    grantBtnText: { color: colors.onPrimaryContainer, fontSize: 14, fontWeight: "500" },

    // M3 Error Banner
    banner: {
      backgroundColor: colors.errorContainer,
      borderRadius: 22, padding: 18, gap: 10, margin: 16, marginBottom: 0,
    },
    bannerTitle: { fontSize: 14, fontWeight: "700", color: colors.onErrorContainer },
    bannerBody: { fontSize: 13, color: colors.onErrorContainer, lineHeight: 20 },
    bannerBtn: {
      alignSelf: "flex-start", backgroundColor: colors.primary,
      borderRadius: 20, paddingHorizontal: 16, paddingVertical: 10, marginTop: 4,
    },
    bannerBtnText: { color: colors.onPrimary, fontWeight: "500", fontSize: 14 },

    appsPane: { flex: 1, flexDirection: "row" },
    appsLeft: { flex: 6, paddingTop: 8 },
    paneDiv: { width: StyleSheet.hairlineWidth, backgroundColor: colors.separator },
    appsRight: { flex: 4, paddingTop: 8 },

    // M3 Search Bar
    search: {
      marginHorizontal: 8, marginBottom: 8,
      paddingHorizontal: 16, paddingVertical: 12,
      backgroundColor: colors.surfaceContainerHigh, borderRadius: 28,
      fontSize: 14, color: colors.text,
    },

    appGrid: { paddingHorizontal: 4, paddingBottom: 16 },
    appCell: {
      flex: 1, alignItems: "center",
      paddingVertical: 10, paddingHorizontal: 2,
    },
    appIconWrap: { position: "relative", width: 52, height: 52 },
    appIcon: { width: 52, height: 52, borderRadius: 12 },
    checkBadge: {
      position: "absolute", bottom: -2, right: -2,
      width: 18, height: 18, borderRadius: 9,
      backgroundColor: colors.primary, alignItems: "center", justifyContent: "center",
    },
    appCellName: {
      fontSize: 10, color: colors.subtext, textAlign: "center",
      marginTop: 4, lineHeight: 13,
    },
    appCellNameSelected: { color: colors.primary },

    favHeader: {
      fontSize: 11, fontWeight: "600", color: colors.subtext,
      marginBottom: 6, marginHorizontal: 12, letterSpacing: 0.5,
      textTransform: "uppercase",
    },
    favEmpty: {
      fontSize: 13, color: colors.subtext,
      marginHorizontal: 12, marginTop: 12, lineHeight: 18,
    },
    favRow: {
      flexDirection: "row", alignItems: "center",
      paddingHorizontal: 12, height: 64,
      backgroundColor: colors.surfaceContainer, gap: 12,
    },
    favRowActive: { backgroundColor: colors.surfaceContainerHigh },
    favIcon: { width: 40, height: 40, borderRadius: 10 },
    iconPlaceholder: { backgroundColor: colors.separator },
    favName: { flex: 1, fontSize: 13, color: colors.text },
    dragHandle: { width: 28, height: 28, alignItems: "center", justifyContent: "center" },

    // M3 Navigation Bar
    tabBar: {
      flexDirection: "row",
      backgroundColor: colors.surfaceContainer,
      paddingHorizontal: 8,
      paddingBottom: 18,
      paddingTop: 9,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.separator,
    },
    tabItem: { flex: 1, alignItems: "center" },
    navIndicator: {
      width: "100%", maxWidth: 84, height: 54, borderRadius: 20,
      backgroundColor: "transparent",
      alignItems: "center", justifyContent: "center",
      flexDirection: "column", gap: 3,
    },
    navIndicatorActive: { backgroundColor: colors.secondaryContainer, borderRadius: 20 },
    tabLabel: { fontSize: 11, color: colors.subtext, letterSpacing: 0.15 },
    tabLabelActive: { color: colors.onSecondaryContainer, fontWeight: "600" },
  });
}

export type AppStyles = ReturnType<typeof makeStyles>;

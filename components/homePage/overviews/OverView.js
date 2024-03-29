import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Buttons from "./Buttons";
import OverViewContainer from "./OverViewContainer";

const OverView = () => {
  const [status, setStatus] = useState(1);

  return (
    <View style={styles.screen}>
      <Buttons statusOne={status} statusTwo={status} setStatus={setStatus} />

      <View style={{ paddingVertical: 20 }}>
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          style={[styles.hideContainer, status === 1 && styles.showContainer]}>
          <OverViewContainer />
        </ScrollView>
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          style={[styles.hideContainer, status === 2 && styles.showContainer]}>
          <View style={{ height: 30, backgroundColor: "red" }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({
  screen: { flex: 1, marginTop: 40 },
  hideContainer: { display: "none" },
  showContainer: { display: "flex" },
  innerContainer: {
    display: "flex",
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
});

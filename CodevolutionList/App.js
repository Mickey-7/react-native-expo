
import { StatusBar, SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, SectionList } from 'react-native';
import pokemonList from "./data.json";
import groupedPokemonList from './grouped-data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* List */}
      {/* <ScrollView style={styles.scrollView}>
        {
          pokemonList.map(pokemon => {
            return (
              <View style={styles.card} key={pokemon.id}>
                <Text style={styles.cardText}>{pokemon.type}</Text>
                <Text style={styles.cardText}>{pokemon.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}

      {/* FlatList */}
      {/* <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            console.log(item.id)
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View> */}

      {/* Item Separator */}
      {/* <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            console.log(item.id)
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
        />
      </View> */}

      {/* List Empty */}
      {/* <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          // data={[]} - for ListEmptyComponent testing
          renderItem={({ item }) => {
            console.log(item.id)
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No Items Found</Text>}
        />
      </View> */}

      {/* List Header & Footer */}
      {/* <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          // data={[]} - for ListEmptyComponent testing
          renderItem={({ item }) => {
            console.log(item.id)
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No Items Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
        />
      </View> */}

      {/* Section List */}
      <View style={styles.scrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) =>
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          }
          ItemSeparatorComponent={() => { <View style={{ height: 16 }} /> }}
          SectionSeparatorComponent={() => { <View style={{ height: 16 }} /> }}

        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16 - commented out for ItemSeparator
  },
  cardText: {
    fontSize: 30
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",

  }
});

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Osaka Sushi"
          rating={4.8}
          genre="Japanese"
          address="123 Red Sun Rd"
          short_description="Best Sushi in Town"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Osaka Sushi"
          rating={4.8}
          genre="Japanese"
          address="123 Red Sun Rd"
          short_description="Best Sushi in Town"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Osaka Sushi"
          rating={4.8}
          genre="Japanese"
          address="123 Red Sun Rd"
          short_description="Best Sushi in Town"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
